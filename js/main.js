window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


  initClicks();

  initMaskTel();
  // initLoad();
  // initScroolMagic();
  initFancy();
  initCustomSelect();
  initSwiperImages();
  initClickColor();

  $('.header__nav-link').on('click', function() {
    $('.header').removeClass('active');
    // document.body.style.overflow = "scroll";
    $('body').css('overflow', 'scroll');
});

  function initClickColor() { 
    let colors = document.querySelectorAll(".js_color");
    let imagesCar = document.querySelectorAll(".js_card__img");
    let colorText = document.querySelectorAll('.js_color_name');

    colors.forEach((color, colorIndex) => {
        color.addEventListener("click", (e) => {
            colors.forEach((el, elIndex) => {
                if (color.dataset.model === el.dataset.model) {
                    el.classList.remove("color-active");
                    imagesCar.forEach((img, imgIndex) => {
                        if (color.dataset.model === img.dataset.model) {
                            img.classList.remove("js-active");
                        }

                        if (colorIndex === imgIndex) {
                            color.classList.add("color-active");
                            img.classList.add("js-active");

                            colorText.forEach(el=> {
                                if(el.dataset.model == color.dataset.model) {
                                    el.textContent = color.dataset.colorname;
                                }
                            });
                        }
                    })
                }
            })
        })
    })
};

  function initSwiperImages () {
    var swiperImages = new Swiper(".swiper-images", {
        slidesPerView: 3,
        spaceBetween: 8,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                direction: "vertical",
                slidesPerView: 5,
                freeMode: true,
                spaceBetween: 9,
            },
        },
    });
  };

  function initCustomSelect () {
    $('select').select2({
      width: '100%',
  });
  };


 function initFancy() {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
  }


  function initLoad() {
      $(window).on("scroll", function () {
          lazyLoad.img(200);
          lazyLoad.bg(30);
      });
  }

  function initScroolMagic() {
      // init controller
      const controller = new ScrollMagic.Controller();

      // Создаём сцену 
      new ScrollMagic.Scene({ triggerElement: "#list" })
          .setClassToggle("#list", "active") // add class toggle
          .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: "#equip" })
          .setClassToggle("#equip", "active") // add class toggle
          .addTo(controller);
  }

  function initMaskTel() {
      // Маска для телефона
      $.fn.setCursorPosition = function (pos) {
          if ($(this).get(0).setSelectionRange) {
              $(this).get(0).setSelectionRange(pos, pos);
          } else if ($(this).get(0).createTextRange) {
              var range = $(this).get(0).createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
          }
      };
      $.mask.definitions['~'] = '[49]';
      $("input[type='tel']").click(function () {
          $(this).setCursorPosition(2);
      }).mask("+7 (~99) 999-99-99", {
          placeholder: "_"
      });
  }


  function initClicks() {
    $('.js_footer_info_toggle').on('click', function() {
        $('.footer__info-toggle').toggle();
    });
      document.addEventListener("click", (event) => {
          if (event.target.closest(".burger")) {
              header.classList.toggle("active");
              if (header.classList.contains("active")) { 
                  document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "scroll";
              }
          }
          if (event.target.closest(".header-menu__nav-link")) { 
              header.classList.remove("active");
              document.body.style.overflow = "scroll";
          }

      })
  }
})









