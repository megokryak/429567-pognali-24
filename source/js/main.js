var navMain = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var navToggleClose = document.querySelector('.main-nav__close-menu');

navMain.classList.remove('header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header--active-menu')) {
    navMain.classList.remove('header--active-menu');
    navToggle.classList.remove('header__toggle--close-menu');
  } else {
    navMain.classList.add('header--active-menu');
    navToggle.classList.add('header__toggle--close-menu');
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

  // modal

  var modalLink = document.querySelector('.profile__link');
  var modal = document.querySelector('.modal-price');
  var modalClose = document.querySelector('.modal-price__close');

  modalLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (modal.classList.contains('modal-price--close')) {
      modal.classList.remove('modal-price--close');
  } else {
    modal.classList.add('modal-price--close');
  }
  });

  modalClose.addEventListener('click', function(){
    modal.classList.add('modal-price--close');
  });
