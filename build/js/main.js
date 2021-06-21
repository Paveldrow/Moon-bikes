const PAGEBODY = document.querySelector('.page__body');
PAGEBODY.classList.remove('no-js');

const BUTTONMENU = document.querySelector('.page-header__button-menu');
const MENU = document.querySelector('.main-nav');

BUTTONMENU.addEventListener('click', function () {
  MENU.classList.toggle('main-nav--opened');
  BUTTONMENU.classList.toggle('page-header__button-menu--close');
});
