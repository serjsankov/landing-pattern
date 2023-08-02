window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


    initClicks();

    initMaskTel();
  // initLoad();
  // initScroolMagic();
    initFancy();
    initCustomSelect();
    initSwipers();

    function initSwipers() { 
        var swiperPrev = new Swiper(".swiper-prev", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1025: {
                    direction: "vertical",
                    slidesPerView: 5,
                }
            }
          });
          var swiperImg = new Swiper(".swiper-img", {
            spaceBetween: 10,
            thumbs: {
              swiper: swiperPrev,
            },
          });
        
          var swiperEquip = new Swiper(".swiper-equip", {
            pagination: {
              el: ".swiper-pagination",
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
          });
        
          var swiperEquipMob = new Swiper(".swiper-equip_mob", {
            pagination: {
                el: '[data-slider-dots]',
                type: "bullets",
                clickable: true,
                bulletClass: "dot",
                bulletActiveClass: "dot_active",
                renderBullet: function (index, className) {
                    return '<div class="' + className + '"></div>';
                },
            },
              navigation: {
                nextEl: ".swiper-button-next-mob",
                prevEl: ".swiper-button-prev-mob",
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
    let imgCarPrev = document.querySelectorAll(".swiper-prev .swiper-slide img"),
        colors = document.querySelectorAll(".js-color-car"),
        imgCarSwiper = document.querySelectorAll(".swiper-img .swiper-slide img");
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
          if (event.target.closest(".js-color-car")) {
            console.log(event.target.dataset.link);
            colors.forEach(color=> {
                color.classList.remove("active");
            });
            event.target.classList.add("active");
            imgCarPrev.forEach((img, imgIndex)=> {
                img.src = `./img/k${imgIndex + 1}-${event.target.dataset.link}.png`;
            });
            imgCarSwiper.forEach((img, imgIndex)=> {
                img.src = `./img/k${imgIndex + 1}-${event.target.dataset.link}.png`;
            })
          }

      })
  }
})









