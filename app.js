// Inject nav and footer into every page
document.addEventListener('DOMContentLoaded', () => {

  // LOADER
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('done');
        setTimeout(() => loader.remove(), 600);
      }, 1400);
    });
  }

  // NAV active state
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === path) el.classList.add('active');
  });

  // hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  if (ham && mob) ham.addEventListener('click', () => mob.classList.toggle('open'));

  // scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
});

const LOADSTRING = `loadstring(game:HttpGet("https://raw.githubusercontent.com/binx-ux/airhub-binxix-v7/refs/heads/main/script/aimbot"))()`;

function copyLoadstring() {
  navigator.clipboard.writeText(LOADSTRING).then(() => {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = 'Loadstring copied to clipboard';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  });
}
