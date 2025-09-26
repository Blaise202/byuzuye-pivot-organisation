document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const yearSpan = document.getElementById("copyright-year");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});