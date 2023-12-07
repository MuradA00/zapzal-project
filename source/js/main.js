const themeItems = document.querySelectorAll('.header-theme__item');
const darkThemeButton = document.querySelector('.header-theme__item--sun');
const sunThemeButton = document.querySelector('.header-theme__item--moon');
const headerMenu = document.querySelector('.header-menu');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header')

headerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('header-menu--active');

  if (headerMenu.classList.contains('header-menu--active')) {
    header.classList.add('header--fixed');
    menu.classList.add('menu--active')
  } else {
    header.classList.remove('header--fixed')
    menu.classList.remove('menu--active')
  }
})

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
