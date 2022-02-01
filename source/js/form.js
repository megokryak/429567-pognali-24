var navMain = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var navToggleClose = document.querySelector('.main-nav__close-menu');
var dropDown = document.querySelector('.country-visit__dropdown');
var dropDownAlphabet = document.querySelector('.country-visit__wrapper-alphabet');
var selectCountry = document.querySelector('.country-visit__country-add');
var countries = document.querySelector('.country-visit__wrapper-alphabet');

navMain.classList.remove('header--nojs');
navMain.classList.remove('header--nojs-color-back');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header--active-menu')) {
    navMain.classList.remove('header--active-menu');
    navToggle.classList.remove('header__toggle--close-menu');
  } else {
    navMain.classList.add('header--active-menu');
    navToggle.classList.add('header__toggle--close-menu');
  }
});

dropDown.addEventListener('click', function() {
  if (dropDownAlphabet.classList.contains('country-visit__wrapper-alphabet--invisible')) {
    dropDownAlphabet.classList.remove('country-visit__wrapper-alphabet--invisible');
  } else {
    dropDownAlphabet.classList.add('country-visit__wrapper-alphabet--invisible');
  }
});

selectCountry.addEventListener('click', function(e) {
  e.preventDefault();
  if (countries.classList.contains('country-visit__wrapper-alphabet--invisible')) {
    countries.classList.remove('country-visit__wrapper-alphabet--invisible');
    selectCountry.classList.add('country-visit__country-add--active');
  } else {
    countries.classList.add('country-visit__wrapper-alphabet--invisible');
    selectCountry.classList.remove('country-visit__country-add--active');
  }
});

//scroll

var headerTop = document.querySelector('.header');

window.addEventListener('scroll', function (e) {
  e.preventDefault();

  if (window.pageYOffset >= 50) {
    headerTop.classList.add('header--fixed');

  } else {
    headerTop.classList.remove('header--fixed');
  }
});
