document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector(".menu-btn");
  const header = document.querySelector(".site-header");

  if (menuBtn && header) {
    menuBtn.addEventListener("click", function () {
      header.classList.toggle("menu-open");
      const open = header.classList.contains("menu-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 850) {
          header.classList.remove("menu-open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }
});
