window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


  initClicks();

  initMaskTel();
  // initLoad();
  // initScroolMagic();
  initFancy();
  initCustomSelect();
//   initSwiper();
initClickColor(); 

function initClickColor () {
    let colors = document.querySelectorAll(".color-select span"),
        imagesCar = document.querySelectorAll(".card__img"),
        colorName = document.querySelector(".model__color span");

    colors.forEach((color, colorIndex) => {
        color.addEventListener("click", (e) => {
            colors.forEach((el, elIndex) => {
                if (color.dataset.equip === el.dataset.equip) {
                    el.classList.remove("color-active");
                    imagesCar.forEach((img, imgIndex) => {
                        if (color.dataset.equip === img.dataset.equip) {
                            img.classList.remove("js-active");
                        }

                        if (colorIndex === imgIndex) {
                            color.classList.add("color-active");
                            img.classList.add("js-active");
                        }
                    })
                }
            })
        })
    })
};

  function initSwiper () {
    // var modelSlider = new Swiper(".modelSwiper", {
    //     effect: "creative",
    //     creativeEffect: {
    //         prev: {
    //             translate: ["-140%", -100, -800],
    //         },
    //         next: {
    //             translate: ["140%", -100, -800],
    //         },
    //     },
    //     grabCursor: true,
    //     slidesPerView: 1,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // });

    const count = document.querySelectorAll(
        ".modelSwiper .swiper-pagination span"
    ).length;
    const colorName = document.querySelector(".model__color span");

    if (colorName) {
        colorName.innerText =
            document.querySelector(".color-active").dataset.colorname;

        // for (let i = 0; i < count; i++) {
        //     let span = document.querySelector(`span[data-color="${i}"]`);
        //     span.onclick = () => {
        //         modelSlider.slideTo(i);
        //         document
        //             .querySelector(".color-active")
        //             .classList.remove("color-active");
        //         span.classList.toggle("color-active");
        //         colorName.innerText = span.dataset.colorname;
        //     };
        // }

        $(".modelSwiper").each(function(swiperIndex, swiper) {
            swiper = new Swiper(".modelSwiper", {
                effect: "creative",
                creativeEffect: {
                    prev: {
                        translate: ["-140%", -100, -800],
                    },
                    next: {
                        translate: ["140%", -100, -800],
                    },
                },
                grabCursor: true,
                slidesPerView: 1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            // swiper.on("slideChange", function () {
            //     console.log($(this).parent('.models-card'));
            //     const activeColor = document.querySelector(".color-active");
            //     const index = modelSlider.activeIndex;
            //     activeColor.classList.remove("color-active");
            //     document
            //         .querySelector(`span[data-color="${index}"]`)
            //         .classList.add("color-active");
            //     colorName.innerText =
            //         document.querySelector(".color-active").dataset.colorname;
            // });
           
        })
    }
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









