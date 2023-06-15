window.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector(".header"),
        filterClassItem = document.querySelectorAll(".models-filter__class-item");


  initClicks();

  initMaskTel();
  // initLoad();
  // initScroolMagic();
  initFancy();
  initCustomSelect();
  initScroll();
  initRange();

  function initRange() {
    var range = document.getElementById('range');

    function fastSelectFormat (v, setter) {
        var n = Math.floor(v / 1000),
            key =
                n > 0
                    ? ((v / 100).toFixed(1) / 10).toFixed(1) + " млн"
                    : v - (v % 10) + " т";

        setter(key, v);

        return key;
    }

    if (!range) {
      return;
    }

    var priceMin = +range.dataset.min / 1000;
    var priceMax = +range.dataset.max / 1000;

    var priceMinCurrent = +range.dataset.currentMin;
    var priceMaxCurrent = +range.dataset.currentMax;

    if (priceMinCurrent && priceMinCurrent > 0) {
      priceMinCurrent = priceMinCurrent / 1000;
    }

    if (priceMaxCurrent && priceMaxCurrent > 0) {
      priceMaxCurrent = priceMaxCurrent / 1000;
    }

    this.fastSelectRealValues = {};

    var setRealValues = function (key, v) {
        fastSelectRealValues['' + key] = v;
    };
    


    noUiSlider.create(range, {
      range: {
        'min': priceMin,
        'max': priceMax,
      },
      step: 10,
      start: [priceMin !== priceMinCurrent ? priceMinCurrent : priceMin, priceMax !== priceMaxCurrent ? priceMaxCurrent : priceMax],
      connect: true,
      behaviour: 'tap-drag',
      tooltips: true,
      format: {
        to: function (v) {
          return fastSelectFormat(Math.floor(v), setRealValues);
        },
        from: function (v) {
          return v;
        },
      }
    });

    var sumSliderValueMinInputElement = $('#rangeSumValueMinInput');
    var sumSliderValueMaxInputElement = $('#rangeSumValueMaxInput');

    range.noUiSlider.on('update', function (values, handle) {
      var v = priceMin;

      if (fastSelectRealValues.hasOwnProperty(values[handle])) {
        v = fastSelectRealValues[values[handle]];
      }

      v = Math.round(v * 1000);

      if (handle === 0) {
        if (!sumSliderValueMinInputElement.hasClass('__ready')) {
          sumSliderValueMinInputElement.val(v).change();
        } else {
          sumSliderValueMinInputElement.removeClass('__ready');
        }
        $('.js-nouislider-min-price').html(values[handle]);
      }

      if (handle === 1) {
        if (!sumSliderValueMaxInputElement.hasClass('__ready')) {
          sumSliderValueMaxInputElement.val(v).change();
        } else {
          sumSliderValueMaxInputElement.removeClass('__ready');
        }
        $('.js-nouislider-max-price').html(values[handle]);
      }

    });
  }




  function initScroll () {
        window.addEventListener("scroll", (e) => {
              if (pageYOffset > 70) {
                  $(".header").addClass("js-scroll");
              } else {
                  $(".header").removeClass("js-scroll");
              }
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
      document.addEventListener("click", (event) => {
          if (event.target.closest(".burger.js-open-menu")) {
              header.classList.add("active");
              document.body.style.overflow = "hidden";
          }
          if (event.target.closest(".burger.js-closed-menu")) {
            header.classList.remove("active");
            document.body.style.overflow = "scroll";
          }
          if (event.target.closest(".header-nav__link")) { 
              header.classList.remove("active");
              document.body.style.overflow = "scroll";
          }
          if(event.target.closest(".models-filter__class-item")) {
            filterClassItem.forEach(el=> {
                el.classList.remove("active");
            });
            event.target.closest(".models-filter__class-item").classList.add("active");
          }

      })
  }
})









