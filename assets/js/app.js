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

  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  if (ham && mob) {
    const setOpen = (open) => {
      mob.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open ? 'true' : 'false');
      ham.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    ham.addEventListener('click', () => setOpen(!mob.classList.contains('open')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mob.classList.contains('open')) setOpen(false);
    });
  }

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
  const t = document.getElementById('toast');
  const show = (msg) => {
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  };
  navigator.clipboard.writeText(LOADSTRING).then(() => show('Loadstring copied to clipboard')).catch(() => {
    show('Copy blocked — select and copy manually, or use HTTPS');
  });
}
