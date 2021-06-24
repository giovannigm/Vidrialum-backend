const openNav = document.querySelector("header .open-nav");
const navLinks = document.querySelector("header .nav");

openNav.addEventListener("click", function () {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
});

