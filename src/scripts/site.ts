import { officeStatus } from '../lib/hours';
import { track } from '../lib/events';

window.dsReady = true;

// transitions.dev texts reveal: the reflow settles the hidden state first, so adding .is-shown plays the rise.
for (const block of document.querySelectorAll<HTMLElement>('.t-stagger')) {
  void block.offsetHeight;
  block.classList.add('is-shown');
}

// Each section's pieces rise in as they reach the screen; pieces that arrive together follow one another.
// What is already in view at load, the hero and the photographs used as backgrounds never move.
const rising = 'h2, .lead, .photo, .card, .quote, .steps > li, .t-acc, .panel, .surface, .room, .member, .story, .sheet, .plan, .voice-quote, .remark, .visit-card';
const still = '.hero, .t-stagger, .visit-photo';
// Checked on every scroll, so a jump past a piece (a link to a section, the End key) still shows it.
// Phones skip it: a long single column reads better with nothing waiting to appear.
if (matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 641px)').matches) {
  const below = [...document.querySelectorAll<HTMLElement>(`main :is(${rising})`)].filter(
    (el) => !el.closest(still) && el.getBoundingClientRect().top > innerHeight,
  );
  let waiting: HTMLElement[] = [];
  for (const el of below) {
    if (el.parentElement?.closest('.rise')) continue;
    el.classList.add('rise');
    waiting.push(el);
  }
  const reveal = () => {
    let i = 0;
    waiting = waiting.filter((el) => {
      // Shown as soon as any of it enters the screen, so nothing in view is ever left blank.
      if (el.getBoundingClientRect().top >= innerHeight) return true;
      el.style.setProperty('--i', String(Math.min(i++, 5)));
      el.classList.add('is-in');
      return false;
    });
    if (!waiting.length) removeEventListener('scroll', reveal);
  };
  addEventListener('scroll', reveal, { passive: true });
}

// Office hours, read in San Antonio's time. The published hours stay in the HTML either way.
const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
for (const el of document.querySelectorAll<HTMLElement>('[data-office-status]')) el.textContent = officeStatus(new Date(), lang);

document.addEventListener('click', (event) => {
  const link = (event.target as Element).closest?.('a[href^="tel:"]');
  if (link) track('click_call');
});
