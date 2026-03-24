(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menu: document.querySelector('.js-menu-container'),
    body: document.querySelector('body'),
  };

  function toggleMenu() {
    const isMenuOpen = refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  // Відкриття та закриття по кнопках
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // ЗАКРИТТЯ ПРИ КЛІКУ НА ПОСИЛАННЯ
  // Ми кажемо: "Знайди всі теги <a> всередині контейнера меню"
  const allLinks = refs.menu.querySelectorAll('a');

  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Видаляємо класи, щоб меню зникло, а скрол з'явився
      refs.menu.classList.remove('is-open');
      refs.body.classList.remove('no-scroll');
      refs.openMenuBtn.setAttribute('aria-expanded', false);
    });
  });

  // Закриваємо меню, якщо користувач різко перейшов на десктоп (від 1440px)
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
  });
})();