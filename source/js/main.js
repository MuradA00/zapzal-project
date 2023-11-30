const themeItems = document.querySelectorAll('.header-theme__item');
const darkThemeButton = document.querySelector('.header-theme__item--sun');
const sunThemeButton = document.querySelector('.header-theme__item--moon');

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark-theme');

  themeItems.forEach(item => {
    item.classList.toggle('header-theme__item--active');
  });

  if (document.documentElement.classList.contains('dark-theme')) {
    sunThemeButton.classList.remove('header-theme__item--active');
    darkThemeButton.classList.add('header-theme__item--active');
  } else {
    darkThemeButton.classList.remove('header-theme__item--active');
    sunThemeButton.classList.add('header-theme__item--active');
  }
};

themeItems.forEach(item => {
  item.addEventListener('click', toggleTheme);
});

window.addEventListener('DOMContentLoaded', () => {
  if (document.documentElement.classList.contains('dark-theme')) {
    darkThemeButton.classList.add('header-theme__item--active');
  } else {
    sunThemeButton.classList.add('header-theme__item--active');
  }
});
