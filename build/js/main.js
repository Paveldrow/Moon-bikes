const pageBody = document.querySelector('.page__body');
pageBody.classList.remove('no-js');

const buttonMenuOpen = document.querySelector('.page-header__button-menu--open');
const menu = document.querySelector('.page-header__nav');

const closeMenu = function () {
  const buttonMenuClose = document.querySelector('.page-header__button-menu--close');
  buttonMenuClose.addEventListener('click', function () {
    menu.classList.remove('page-header__nav--opened');
  });
};

buttonMenuOpen.addEventListener('click', function () {
  menu.classList.add('page-header__nav--opened');
  closeMenu();
});

