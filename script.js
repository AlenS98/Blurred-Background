const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");

btn.addEventListener("click", () => {
  container.classList.add("active");
  popupContainer.classList.remove("active");
});
