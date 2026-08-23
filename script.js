document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     CURRENT YEAR
  ========================= */
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* =========================
     MOBILE MENU
  ========================= */
  const menuButton = document.querySelector(".menu-btn");
  const header = document.querySelector(".site-header");

  if (menuButton && header) {
    menuButton.addEventListener("click", function () {
      const isOpen = header.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });

    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* =========================
     HERO PRODUCT SLIDESHOW
     Changes every 5 seconds
  ========================= */
  const slides = document.querySelectorAll(".hero-product-slide");

  if (slides.length > 1) {
    let currentSlide = 0;

    setInterval(function () {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }
});
