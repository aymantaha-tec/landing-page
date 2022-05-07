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

// const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const headingMain = document.querySelector(".heading-main");
const navBar = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  menuBtn.classList.add("active");
  headingMain.classList.add("active");
  navBar.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  headingMain.classList.remove("active");
  navBar.classList.remove("active");
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});
