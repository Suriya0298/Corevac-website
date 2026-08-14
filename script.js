/* =========================================================
   COREVAC WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {

  menuBtn.addEventListener("click", function () {

    document.body.classList.toggle("menu-open");

  });

}


/* Close mobile menu when navigation link is clicked */

document.querySelectorAll(".nav a").forEach(function (link) {

  link.addEventListener("click", function () {

    document.body.classList.remove("menu-open");

  });

});


/* =========================================================
   COPYRIGHT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   HERO PRODUCT ROTATION
========================================================= */

const heroProductImage =
  document.getElementById("heroProductImage");

const heroProductName =
  document.getElementById("heroProductName");


if (heroProductImage && heroProductName) {

  const products = [

    {
      image: "assets/Products/vr-5d.png",
      name: "VR 5 D"
    },

    {
      image: "assets/Products/vr-8d.png",
      name: "VR 8 D"
    },

    {
      image: "assets/Products/vr-10d.png",
      name: "VR 10 D"
    },

    {
      image: "assets/Products/vr-12d.png",
      name: "VR 12 D"
    },

    {
      image: "assets/Products/vr-16d.png",
      name: "VR 16 D"
    },

    {
      image: "assets/Products/vr-25d.png",
      name: "VR 25 D"
    },

    {
      image: "assets/Products/vr-40d.png",
      name: "VR 40 D"
    },

    {
      image: "assets/Products/vr-60d.png",
      name: "VR 60 D"
    },

    {
      image: "assets/Products/vr-100d.png",
      name: "VR 100 D"
    },

    {
      image: "assets/Products/vr-140d.png",
      name: "VR 140 D"
    },

    {
      image: "assets/Products/vr-4l.png",
      name: "VR 4 L"
    },

    {
      image: "assets/Products/vr-8l.png",
      name: "VR 8 L"
    },

    {
      image: "assets/Products/vr-10l.png",
      name: "VR 10 L"
    },

    {
      image: "assets/Products/vr-12l.png",
      name: "VR 12 L"
    },

    {
      image: "assets/Products/vr-16l.png",
      name: "VR 16 L"
    },

    {
      image: "assets/Products/vr-25l.png",
      name: "VR 25 L"
    },

    {
      image: "assets/Products/vr-40l.png",
      name: "VR 40 L"
    },

    {
      image: "assets/Products/vr-60l.png",
      name: "VR 60 L"
    },

    {
      image: "assets/Products/vr-106l.png",
      name: "VR 106 L"
    },

    {
      image: "assets/Products/vr-151l.png",
      name: "VR 151 L"
    },

    {
      image: "assets/Products/vr-205l.png",
      name: "VR 205 L"
    },

    {
      image: "assets/Products/vr-305l.png",
      name: "VR 305 L"
    }

  ];


  let currentProduct = 0;


  function showNextProduct() {

    /* Fade out */

    heroProductImage.classList.add("product-fade-out");

    heroProductName.style.opacity = "0";
    heroProductName.style.transform = "translateY(8px)";


    setTimeout(function () {

      currentProduct++;

      if (currentProduct >= products.length) {
        currentProduct = 0;
      }


      const product = products[currentProduct];


      heroProductImage.src = product.image;

      heroProductName.textContent = product.name;


      /* Fade back in */

      heroProductImage.classList.remove("product-fade-out");

      heroProductName.style.opacity = "1";
      heroProductName.style.transform = "translateY(0)";

    }, 800);

  }


  /*
    Change product every 5 seconds
  */

  setInterval(showNextProduct, 5000);

}
