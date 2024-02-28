window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");


    initClicks();

    initMaskTel();
    // initLoad();
    // initScroolMagic();
    initFancy();
    initCustomSelect();

    const carSliders = document.querySelectorAll('.model-card');
    carSliders.forEach((slider, index) => {
        let colors = new Swiper(`.model-card-colors-swiper${index}`, {
            slidesPerView: 5,
            spaceBetween: 10,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        let cars = new Swiper(`.model-card-swiper${index}`, {
            // lazy: true,
            spaceBetween: 0,
            // navigation: {
            //     nextEl: `.swiper-colors-button-next.swiper-colors-button-next${index}`,
            //     prevEl: `.swiper-colors-button-prev.swiper-colors-button-prev${index}`,
            // },
            thumbs: {
                swiper: colors,
            },
            on: {
                slideChange: function (e) {
                    // e.el.closest('.models-card__cont').querySelector('.js_color_name').innerText = e.el.closest('.models-card__cont').querySelector('.swiper-slide-thumb-active .js_color').dataset.colorname;
                },
            },
        });
    });

    let swiperModelReal = new Swiper('.model-card-real-swiper', {
        slidesPerView: 4,
        spaceBetween: 16,
    });

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









