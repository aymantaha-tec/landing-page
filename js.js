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
