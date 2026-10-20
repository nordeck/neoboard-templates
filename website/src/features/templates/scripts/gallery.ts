// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Client-side search, category filter and sort over the cards rendered at build time.
// State is mirrored in the query string (?q=…&cat=…&sort=az) so reloads and back navigation keep it.

type Sort = 'new' | 'az';

const root = document.querySelector<HTMLElement>('[data-gallery]');
const grid = root?.querySelector<HTMLElement>('[data-grid]');

if (root && grid) {
  const lang = root.dataset.lang ?? 'en';
  const search = root.querySelector<HTMLInputElement>('[data-search]');
  const sortButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-sort]')];
  const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-chip]')];
  const count = root.querySelector<HTMLElement>('[data-count]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const reset = root.querySelector<HTMLButtonElement>('[data-reset]');
  const featured = document.querySelector<HTMLElement>('[data-featured]');
  const cards = [...grid.querySelectorAll<HTMLElement>('[data-card]')];
  const validCategories = new Set(chips.map((c) => c.dataset.chip));

  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get('q') ?? '',
    cat: validCategories.has(params.get('cat') ?? '') ? (params.get('cat') ?? '') : '',
    sort: (params.get('sort') === 'az' ? 'az' : 'new') as Sort,
  };

  const countText = (n: number) =>
    (n === 1 ? root.dataset.countOne : root.dataset.countOther)?.replace(/\d+/, String(n)) ?? String(n);

  const byNewest = (a: HTMLElement, b: HTMLElement) =>
    (b.dataset.published ?? '').localeCompare(a.dataset.published ?? '');
  const byTitle = (a: HTMLElement, b: HTMLElement) =>
    (a.dataset.title ?? '').localeCompare(b.dataset.title ?? '', lang);

  function render() {
    const q = state.q.trim().toLowerCase();
    let visible = 0;
    for (const card of [...cards].sort(state.sort === 'az' ? byTitle : byNewest)) {
      const match = (!state.cat || card.dataset.category === state.cat) && (!q || (card.dataset.search ?? '').includes(q));
      card.hidden = !match;
      if (match) visible++;
      grid!.append(card); // re-append in sort order
    }
    if (count) count.textContent = countText(visible);
    if (empty) empty.hidden = visible > 0;
    grid!.hidden = visible === 0;
    if (featured) featured.hidden = Boolean(state.cat || q);
    for (const b of sortButtons) b.setAttribute('aria-pressed', String(b.dataset.sort === state.sort));
    for (const c of chips) c.setAttribute('aria-pressed', String(c.dataset.chip === state.cat));

    const next = new URLSearchParams();
    if (state.q) next.set('q', state.q);
    if (state.cat) next.set('cat', state.cat);
    if (state.sort === 'az') next.set('sort', 'az');
    const qs = next.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }

  if (search) {
    search.value = state.q;
    search.addEventListener('input', () => {
      state.q = search.value;
      render();
    });
  }
  for (const b of sortButtons) {
    b.addEventListener('click', () => {
      state.sort = b.dataset.sort as Sort;
      render();
    });
  }
  for (const c of chips) {
    c.addEventListener('click', () => {
      state.cat = c.dataset.chip ?? '';
      render();
    });
  }
  reset?.addEventListener('click', () => {
    state.q = '';
    state.cat = '';
    if (search) search.value = '';
    render();
    search?.focus();
  });

  render();
}
