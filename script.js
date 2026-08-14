/* =========================================================
   COREVAC WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
      document.getElementById("year");

    if (yearElement) {

      yearElement.textContent =
        new Date().getFullYear();

    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
      document.querySelector(".menu-btn");

    const nav =
      document.querySelector(".nav");


    if (menuButton && nav) {

      menuButton.addEventListener(
        "click",
        function () {

          const isOpen =
            nav.classList.toggle("active");

          menuButton.setAttribute(
            "aria-expanded",
            isOpen
          );

        }
      );


      nav.querySelectorAll("a").forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              nav.classList.remove("active");

              menuButton.setAttribute(
                "aria-expanded",
                "false"
              );

            }
          );

        }
      );

    }



    /* =====================================================
       HERO PRODUCT SLIDESHOW
    ===================================================== */

    const heroImage =
      document.getElementById(
        "heroProductImage"
      );


    const heroLabel =
      document.getElementById(
        "heroProductLabel"
      );


    if (!heroImage) {
      return;
    }



    /*
      IMPORTANT:

      These filenames correspond to the
      files inside:

      assets/Products/
    */

    const products = [

      {
        image: "assets/Products/vr-5d.png",
        name: "VR 5D"
      },

      {
        image: "assets/Products/vr-8d.png",
        name: "VR 8D"
      },

      {
        image: "assets/Products/vr-10d.png",
        name: "VR 10D"
      },

      {
        image: "assets/Products/vr-12d.png",
        name: "VR 12D"
      },

      {
        image: "assets/Products/vr-16d.png",
        name: "VR 16D"
      },

      {
        image: "assets/Products/vr-25d.png",
        name: "VR 25D"
      },

      {
        image: "assets/Products/vr-40d.png",
        name: "VR 40D"
      },

      {
        image: "assets/Products/vr-60d.png",
        name: "VR 60D"
      },

      {
        image: "assets/Products/vr-100d.png",
        name: "VR 100D"
      },

      {
        image: "assets/Products/vr-140d.png",
        name: "VR 140D"
      },


      {
        image: "assets/Products/vr-4l.png",
        name: "VR 4L"
      },

      {
        image: "assets/Products/vr-8l.png",
        name: "VR 8L"
      },

      {
        image: "assets/Products/vr-10l.png",
        name: "VR 10L"
      },

      {
        image: "assets/Products/vr-12l.png",
        name: "VR 12L"
      },

      {
        image: "assets/Products/vr-16l.png",
        name: "VR 16L"
      },

      {
        image: "assets/Products/vr-25l.png",
        name: "VR 25L"
      },

      {
        image: "assets/Products/vr-40l.png",
        name: "VR 40L"
      },

      {
        image: "assets/Products/vr-60l.png",
        name: "VR 60L"
      },

      {
        image: "assets/Products/vr-106l.png",
        name: "VR 106L"
      },

      {
        image: "assets/Products/vr-151l.png",
        name: "VR 151L"
      },

      {
        image: "assets/Products/vr-205l.png",
        name: "VR 205L"
      },

      {
        image: "assets/Products/vr-305l.png",
        name: "VR 305L"
      }

    ];



    /* =====================================================
       PRELOAD PRODUCT IMAGES
    ===================================================== */

    products.forEach(
      function (product) {

        const image =
          new Image();

        image.src =
          product.image;

      }
    );



    /* =====================================================
       CURRENT PRODUCT
    ===================================================== */

    let currentProduct = 0;



    /* =====================================================
       CHANGE PRODUCT
    ===================================================== */

    function changeProduct() {


      /*
        Start fade-out
      */

      heroImage.classList.add(
        "product-changing"
      );


      if (heroLabel) {

        heroLabel.classList.add(
          "product-changing"
        );

      }


      /*
        Wait for fade-out
      */

      setTimeout(
        function () {


          currentProduct++;


          if (
            currentProduct >=
            products.length
          ) {

            currentProduct = 0;

          }


          const product =
            products[currentProduct];


          /*
            Change image
          */

          heroImage.src =
            product.image;


          heroImage.alt =
            "ELGi " +
            product.name +
            " Vacuum Pump";


          /*
            Change product name
          */

          if (heroLabel) {

            heroLabel.textContent =
              product.name;

          }


          /*
            Fade image back in
          */

          heroImage.classList.remove(
            "product-changing"
          );


          if (heroLabel) {

            heroLabel.classList.remove(
              "product-changing"
            );

          }


        },

        700
      );

    }



    /* =====================================================
       CHANGE EVERY 5 SECONDS
    ===================================================== */

    setInterval(
      changeProduct,
      5000
    );


  }
);
