const pageBody = document.querySelector('.page__body');
pageBody.classList.remove('no-js');

const buttonMenuOpen = document.querySelector('.page-header__button-menu--open');
const menu = document.querySelector('.main-nav');

const closeMenu = function () {
  const buttonMenuClose = document.querySelector('.page-header__button-menu--close');
  buttonMenuClose.addEventListener('click', function () {
    menu.classList.remove('main-nav--opened');
  });
};

buttonMenuOpen.addEventListener('click', function () {
  menu.classList.add('main-nav--opened');
  closeMenu();
});
