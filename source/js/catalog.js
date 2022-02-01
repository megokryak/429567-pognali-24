var navMain = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var navToggleClose = document.querySelector('.main-nav__close-menu');

var filterToggle = document.querySelector('.filter-country__button');
var filter = document.querySelector('.filter-country__wrapper-filter');
var filterParent = document.querySelector('.filter-country');
var filterClose = document.querySelector('.filter-country__close-button');
var filterOpen = document.querySelector('.filter-country__container');
var filterLink = document.querySelector(".filter-country__link");
var searchComponion = document.querySelectorAll(".form-catalog__link-dropdown");

navMain.classList.remove('header--nojs');
navMain.classList.remove('header--nojs-color-back');
filter.classList.remove('filter-country__wrapper-filter--nojs');
filterOpen.classList.remove('filter-country__container--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header--active-menu')) {
    navMain.classList.remove('header--active-menu');
    navToggle.classList.remove('header__toggle--close-menu');
  } else {
    navMain.classList.add('header--active-menu');
    navToggle.classList.add('header__toggle--close-menu');
  }
});

filterToggle.addEventListener('click', function() {
  if (filter.classList.contains('filter-country__wrapper-filter--close')) {
    filter.classList.remove('filter-country__wrapper-filter--close');
    filterOpen.classList.add('filter-country__container--open-filter');
    filterParent.classList.add('filter-country--open');
  }
  else {
    filter.classList.add('filter-country__wrapper-filter--close');
    filterOpen.classList.remove('filter-country__container--open-filter');
    filterParent.classList.remove('filter-country--open');
  }
});

filterClose.addEventListener('click', function() {
  filter.classList.add('filter-country__wrapper-filter--close');
  filterOpen.classList.remove('filter-country__container--open-filter');
});

filterLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (filter.classList.contains('filter-country__wrapper-filter--close')) {
    filter.classList.remove('filter-country__wrapper-filter--close');
  }
  else {
    filter.classList.add('filter-country__wrapper-filter--close');
  }

})

searchComponion.forEach(function(arr) {
  arr.classList.remove('form-catalog__link-dropdown--nojs');
  arr.addEventListener('click' , function(e) {
    e.preventDefault();
    if(arr.classList.contains('form-catalog__link-dropdown--open')) {
      arr.classList.remove('form-catalog__link-dropdown--open');
    }
    else {
      arr.classList.add('form-catalog__link-dropdown--open');
    }
  });
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
