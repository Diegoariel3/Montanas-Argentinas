const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.hidden = false;
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); menu.focus(); } });
const filters = document.querySelector('.filters');
if (filters) {
 filters.hidden = false;
 const search = filters.querySelector('input'); const region = filters.querySelector('select');
 const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
 const update = () => { let count = 0; document.querySelectorAll('.destination').forEach(card => { const match = normalize(card.dataset.search).includes(normalize(search.value)) && (!region.value || card.dataset.region === region.value); card.hidden = !match; if (match) count++; }); document.querySelector('#results').textContent = `${count} ${count === 1 ? 'destino' : 'destinos'}`; document.querySelector('#empty').hidden = count !== 0; };
 filters.addEventListener('submit', event => event.preventDefault()); filters.addEventListener('input', update); filters.addEventListener('change', update); filters.addEventListener('reset', () => setTimeout(update, 0)); update();
 const target = document.getElementById(location.hash.slice(1)); if (target?.matches('.destination')) target.querySelector('details').open = true;
}
const checks = [...document.querySelectorAll('[data-check]')];
const status = document.querySelector('#check-status');
const updateChecks = () => { if (status) status.textContent = `${checks.filter(c => c.checked).length} de ${checks.length} puntos revisados`; };
checks.forEach(check => { try { check.checked = localStorage.getItem(`montanas-v1-${check.dataset.check}`) === 'true'; } catch {} check.addEventListener('change', () => { try { localStorage.setItem(`montanas-v1-${check.dataset.check}`, String(check.checked)); } catch {} updateChecks(); }); }); updateChecks();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add(entry.target.tagName==='IMG'?'enter-photo':'enter-text');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.section h2,.section-heading p,.destination,.travel-note img,.travel-note h2,.travel-note p,.planning li').forEach(element=>observer.observe(element));
}
