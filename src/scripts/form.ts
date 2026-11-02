import { fieldError, serviceFromUrl, submitTo } from '../lib/form-logic';
import { track, trackLead } from '../lib/events';
import { serviceKeys } from '../data/form';

type Field = HTMLInputElement | HTMLSelectElement;

function setError(field: Field, message: string) {
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  const slot = document.getElementById(`${field.id}-error`);
  if (slot) slot.textContent = message;
}

function shake(field: Field) {
  const box = field.closest<HTMLElement>('.t-input');
  if (!box) return;
  box.classList.remove('is-shaking');
  void box.offsetWidth; // restart the animation
  box.classList.add('is-shaking');
}

function checkFields(fields: Field[]) {
  const bad: { field: Field; message: string }[] = [];
  for (const field of fields) {
    const message = fieldError(field.name, field.value);
    setError(field, message);
    if (message) {
      bad.push({ field, message });
      shake(field);
    }
  }
  return bad;
}

function initForm(form: HTMLFormElement) {
  const slider = form.querySelector<HTMLElement>('.t-page-slide')!;
  const pages = [...form.querySelectorAll<HTMLElement>('.t-page')];
  const summary = form.querySelector<HTMLElement>('[data-summary]')!;
  const result = form.querySelector<HTMLElement>('[data-result]')!;
  const select = form.querySelector<HTMLSelectElement>('select[name="service"]')!;
  const validated = (page: Element) => [...page.querySelectorAll<Field>('[data-validate]')];

  // Arriving from a service page: open with that service selected.
  const fromUrl = serviceFromUrl(location.search, serviceKeys);
  if (fromUrl) select.value = fromUrl;
  // Arriving from the home page walkthrough: the visitor's marks are already written into the notes.
  const notes = new URLSearchParams(location.search).get('notes');
  const notesField = form.querySelector<HTMLTextAreaElement>('textarea[name="notes"]');
  if (notes && notesField) notesField.value = notes.slice(0, 500);

  const showPage = (n: 1 | 2, moveFocus = true) => {
    slider.dataset.page = String(n);
    pages.forEach((page) => page.toggleAttribute('inert', page.dataset.pageId !== String(n)));
    if (moveFocus) pages[n - 1].querySelector<HTMLElement>('legend')?.focus({ preventScroll: true });
  };
  showPage(1, false);

  const showSummary = (bad: { field: Field; message: string }[]) => {
    summary.hidden = bad.length === 0;
    summary.replaceChildren();
    if (!bad.length) return;
    const list = document.createElement('ul');
    for (const { field, message } of bad) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${field.id}`;
      link.textContent = message;
      item.append(link);
      list.append(item);
    }
    summary.append(list);
    summary.focus();
  };

  form.querySelector('[data-next]')?.addEventListener('click', () => {
    const bad = checkFields(validated(pages[0]));
    showSummary(bad);
    if (!bad.length) showPage(2);
  });
  form.querySelector('[data-back]')?.addEventListener('click', () => showPage(1));

  // Validate when a field is left, and again as it is fixed once it has shown an error.
  for (const field of form.querySelectorAll<Field>('[data-validate]')) {
    field.addEventListener('blur', () => {
      if (field.value.trim()) setError(field, fieldError(field.name, field.value));
    });
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(field, fieldError(field.name, field.value));
    });
  }

  form.addEventListener(
    'focusin',
    () => track('quote_start', { service: select.value || undefined }),
    { once: true },
  );

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const bad = checkFields(pages.flatMap(validated));
    showSummary(bad);
    if (bad.length) {
      if (pages[0].contains(bad[0].field)) showPage(1, false);
      return;
    }

    const button = form.querySelector<HTMLButtonElement>('[data-submit]')!;
    const state = await submitTo(form.dataset.endpoint ?? '', new FormData(form));

    if (state === 'pending') {
      result.replaceChildren(pendingMessage());
      result.focus();
      return;
    }
    if (state === 'failure') {
      result.replaceChildren(failureMessage());
      result.focus();
      return;
    }
    track('quote_submit_success', { service: select.value || undefined });
    trackLead();
    button.closest('.t-page-slide')?.setAttribute('hidden', '');
    result.replaceChildren(successMessage());
    result.focus();
    result.querySelector('.t-success-check')?.setAttribute('data-state', 'in');
  });
}

function contactLinks(parent: HTMLElement) {
  const phone = document.createElement('a');
  phone.href = 'tel:2109822312';
  phone.textContent = '210-982-2312';
  const email = document.createElement('a');
  email.href = 'mailto:hello@diamondshinefamily.com';
  email.textContent = 'hello@diamondshinefamily.com';
  parent.append(phone, ' or write to ', email, '.');
}

function pendingMessage() {
  const p = document.createElement('p');
  p.className = 'eval-pending';
  p.textContent = 'Nothing was sent. This form is waiting for its authorized recipient. What you typed is still here. To request your evaluation today, call or text ';
  contactLinks(p);
  return p;
}

function failureMessage() {
  const p = document.createElement('p');
  p.className = 'eval-pending';
  p.textContent = 'Your request did not go through, and what you typed is still here. Please try again, or call or text ';
  contactLinks(p);
  return p;
}

function successMessage() {
  const box = document.createElement('div');
  box.className = 'is-success';
  box.innerHTML = '<span class="t-success-check" data-state="out" aria-hidden="true"><svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="3"><path d="M10 25l9 9 19-20" stroke-linecap="square"/></svg></span>';
  const p = document.createElement('p');
  p.textContent = 'Thank you. Your request reached the family. We will follow up with you; a request does not reserve a date.';
  box.append(p);
  return box;
}

export function initEvaluationForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-eval]').forEach(initForm);
}
