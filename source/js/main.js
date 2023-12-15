const themeItems = document.querySelectorAll('.header-theme__item');
const darkThemeButton = document.querySelector('.header-theme__item--sun');
const sunThemeButton = document.querySelector('.header-theme__item--moon');
const headerMenu = document.querySelector('.header-menu');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header')
const walletTabsButtons = document.querySelectorAll('.wallet-tabs__item');
const walletTabsContent = document.querySelectorAll('.wallet-content');
const modalTrigger = document.querySelector('.modal-trigger');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

modalTrigger.addEventListener('click', () => {
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal--active')
  document.body.style.overflow = '';
})

walletTabsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentButtonIndex = button.getAttribute('data-button');
    const currentContentIndex = walletTabsContent[index].getAttribute('data-content');

    if (currentButtonIndex === currentContentIndex) {

      walletTabsButtons.forEach((btn) => {
        btn.classList.remove('wallet-tabs__item--active');
      });
      walletTabsContent.forEach((content) => {
        content.classList.remove('wallet-content--active');
      });

      button.classList.add('wallet-tabs__item--active');
      walletTabsContent[index].classList.add('wallet-content--active');
    }
  });
});
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
