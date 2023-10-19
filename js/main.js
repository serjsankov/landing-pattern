window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


    initClicks();

    initMaskTel();
    // initLoad();
    // initScroolMagic();
    initFancy();
    initCustomSelect();
    initSwiperModelsName();
    
    getDataMark();
    changeSelectMark();

    initClickColor();

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

    async function getDataMark() {
        const response = await fetch('https://cc.collector-crm.ru/api/v1/brands')
        const data = await response.json();
      
        addOptionSelect(data);
      }

      function changeSelectMark() {
        $("select[name=tradeincarbrand]").change(function () {
            console.log($(this).val());
            var mark_id = $(this).val();
   
            getDataModels(mark_id);
        });
   };

   async function getDataModels(mark_id) {
    const URL = `https://cc.collector-crm.ru/api/v1/models/${mark_id}`;
    const response = await fetch(URL);
    const data = await response.json();

    addOptionSelectModel(data);
};

function addOptionSelect(data) {
    data.forEach(el=> {
    $("select[name=tradeincarbrand]").append(`<option value="${el.id}">${el.name}</option>`)
})
};

function addOptionSelectModel(data) {
data.forEach(el=> {
    $("select[name=tradeincarmodel]").append(`<option value="${el.id}">${el.name}</option>`)
});
};

    function initSwiperModelsName() {
        var swiperModelsName = new Swiper(".swiper-models-name", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1353: {
                    slidesPerView: 4,
                }
            },
        });
    };

    function initCustomSelect() {
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









