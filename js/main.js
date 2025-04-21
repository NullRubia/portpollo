const header = document.querySelector(".header");

const headerHeight = header.offsetHeight; //요소의 총 높이
console.log(headerHeight); //74

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY가 headerHeight보다 큽니다.");
    header.classList.add("header--dark"); //클래스 추가
  } else {
    // console.log("window.scrollY가 headerHeight보다 작습니다.");
    header.classList.remove("header--dark"); //클래스 제거
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowup = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowup.style.opacity = 1;
  } else {
    arrowup.style.opacity = 0;
  }
});

arrowup.addEventListener("click", (e) => {
  e.preventDefault(); //a태그의 기본동작 막기
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
