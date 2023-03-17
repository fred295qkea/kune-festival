const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
const tickets = document.querySelector(".burger-ticket");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("overlay");
  tickets.classList.toggle("hide");
});
