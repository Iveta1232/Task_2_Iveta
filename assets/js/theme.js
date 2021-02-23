
const btnBurger = document.querySelector('.btn-burger');
const btnReturn = document.querySelector('.btn-close');
const menu = document.querySelector('#header-menu');
const headerNav = document.querySelector('#header-block');
const playIcon = document.querySelector('.header-image-play');
const changeLang = document.querySelector('.change-language');
const menuLink = document.getElementsByClassName('link');

let checkBox = document.querySelector('#checkbox');
let submitButton = document.querySelector('.contact-form-submit-button');


function clickSubmit() {
  if (checkBox.checked == true) {
    submitButton.classList.remove('disabled');
  } else {
    submitButton.classList.add('disabled');
  }
}

const openMenu = () => {
  menu.classList.add('open');
  btnBurger.classList.remove('btn-active');
  btnBurger.classList.add('btn-hide');
  btnReturn.classList.remove('btn-hide');
  menu.classList.remove('header-menu-open');
  playIcon.classList.add('btn-hide');
  document.querySelectorAll('.language-hidden').forEach(n => n.classList.remove('hidden'));
  headerNav.classList.add('header-block-open');
}

const closeMenu = () => {
  menu.classList.remove('open');
  btnBurger.classList.add('btn-active');
  btnBurger.classList.remove('btn-hide');
  btnReturn.classList.add('btn-hide');
  menu.classList.add('header-menu-open');
  playIcon.classList.remove('btn-hide');
  document.querySelectorAll('.language-hidden').forEach(n => n.classList.add('hidden'));
  headerNav.classList.remove('header-block-open');
}

btnBurger.addEventListener('click', openMenu);
btnReturn.addEventListener('click', closeMenu);



function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back-to-top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back-to-top-show');
  }
}


function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
  }
}

let goTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);



function closeAll(e) {
  closeMenu();
}
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', closeAll);
  
}
