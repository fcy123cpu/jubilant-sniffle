// 主题切换：优先使用本地存储，其次跟随系统
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (stored === 'light' || (!stored && prefersLight)) {
    root.classList.add('light');
  }
})();

// 切换按钮
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const root = document.documentElement;
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// 年份
document.getElementById('year').textContent = String(new Date().getFullYear());



