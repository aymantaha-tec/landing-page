const searchBox = document.querySelector(".box-search");
const navBtnContainer = document.querySelector(".nav-btn");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", () => {
  menu.classList.add("active");
  menuBtn.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
});
