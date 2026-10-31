// Filtro del directorio. Sin JavaScript, la página muestra la lista completa.
(() => {
  const form = document.querySelector('[data-filters]');
  if (!form) return;
  form.hidden = false;

  const normalize = (text) =>
    text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();

  const query = form.querySelector('[name="q"]');
  const category = form.querySelector('[name="categoria"]');
  const selfhost = form.querySelector('[name="autoalojable"]');
  const social = form.querySelector('[name="social"]');
  const status = document.querySelector('[data-status]');
  const empty = document.querySelector('[data-empty]');
  const emptyTerm = document.querySelector('[data-empty-term]');
  const rows = [...document.querySelectorAll('.app-row[data-search]')].map((el) => ({
    el,
    text: normalize(el.dataset.search),
  }));

  const params = new URLSearchParams(location.search);
  query.value = params.get('q') ?? '';
  category.value = params.get('categoria') ?? '';
  selfhost.checked = params.has('autoalojable');
  social.checked = params.has('social');
  if (category.selectedIndex < 0) category.value = '';

  const apply = () => {
    const terms = normalize(query.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const { el, text } of rows) {
      const show =
        terms.every((term) => text.includes(term)) &&
        (!category.value || el.dataset.category === category.value) &&
        (!selfhost.checked || el.dataset.selfhost === 'true') &&
        (!social.checked || el.dataset.social === 'true');
      el.hidden = !show;
      if (show) visible += 1;
    }
    status.textContent = `${visible} ${visible === 1 ? 'programa' : 'programas'}`;
    empty.hidden = visible > 0;
    emptyTerm.textContent = query.value.trim()
      ? `Ningún programa coincide con «${query.value.trim()}» y estos filtros.`
      : 'Ningún programa coincide con estos filtros.';

    const next = new URLSearchParams();
    if (query.value.trim()) next.set('q', query.value.trim());
    if (category.value) next.set('categoria', category.value);
    if (selfhost.checked) next.set('autoalojable', '');
    if (social.checked) next.set('social', '');
    const search = next.toString();
    history.replaceState(null, '', search ? `?${search}` : location.pathname);
  };

  form.addEventListener('input', apply);
  form.addEventListener('submit', (event) => event.preventDefault());
  apply();
})();
