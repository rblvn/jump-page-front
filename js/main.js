/* Mobile menu */
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".header__menu");
let mobileMenu = document.querySelectorAll(".header__menu > ul > .dropdown");
let dropdown = document.querySelectorAll(".dropdown__content");

hamburger.onclick = function () {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("active");
  dropdown.forEach(function (item) {
    item.classList.remove("active");
  });
};

if (mobileMenu.length > 0) {
  mobileMenu.forEach(function (item) {
    item.onclick = function (e) {
      mobileMenu.forEach(function (el) {
        el.classList.remove("active");
      });
      e.target.nextElementSibling.classList.toggle("active");
    };
  });
}
