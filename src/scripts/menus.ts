// <details> already opens and closes on its own. This adds Esc, outside click and the dropdown's close motion.
const CLOSE_MS = 150;

export function initMenus() {
  const menus = [...document.querySelectorAll<HTMLDetailsElement>('[data-menu]')];

  const close = (menu: HTMLDetailsElement, focus = false) => {
    if (!menu.open) return;
    const panel = menu.querySelector<HTMLElement>('.t-dropdown');
    panel?.classList.remove('is-open');
    panel?.classList.add('is-closing');
    window.setTimeout(() => {
      menu.open = false;
      panel?.classList.remove('is-closing');
    }, CLOSE_MS);
    if (focus) menu.querySelector('summary')?.focus();
  };

  for (const menu of menus) {
    const summary = menu.querySelector('summary');
    const panel = menu.querySelector<HTMLElement>('.t-dropdown');
    summary?.addEventListener('click', (event) => {
      event.preventDefault();
      if (menu.open) return close(menu);
      menus.filter((m) => m !== menu).forEach((m) => close(m));
      menu.open = true;
      void panel?.offsetWidth; // the panel must exist at its resting scale before it can animate from it
      panel?.classList.add('is-open');
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') menus.filter((m) => m.open).forEach((m) => close(m, true));
  });
  document.addEventListener('click', (event) => {
    menus.filter((m) => m.open && !m.contains(event.target as Node)).forEach((m) => close(m));
  });
}
