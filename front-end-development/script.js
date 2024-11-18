let menu = document.querySelector("#menu-button");
let navbar = document.querySelector(".hamburger-menu");

menu.addEventListener("click", function () {
  navbar.classList.toggle(".active");
});
