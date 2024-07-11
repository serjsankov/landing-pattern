window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


  initClicks();

  initMaskTel();
  // initLoad();
  // initScroolMagic();
  initFancy();
  initCustomSelect();

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

let center = [55.630782, 37.466979];

// var pixelCenter = map.getGlobalPixelCenter(center);

const ymaps = window.ymaps;

let sizePin;

if (window.innerWidth > 1024) {
    sizePin = [71, 71];
} else {
    sizePin = [46, 46];
}

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16,
        controls: ['zoomControl']
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../geely/img/pin.svg',
        iconImageSize: sizePin, // Размер пина
        iconImageOffset: [-24, -68], // Позиция пина
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования

    map.geoObjects.add(placemark) // Добавляем пин
}

ymaps.ready(init);
});









