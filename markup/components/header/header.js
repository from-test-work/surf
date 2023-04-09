const svg = document.querySelector('.main-map');
const svgTextList = svg.querySelector('.main-map__text').children;
const svgWayList = svg.querySelector('.main-map__way').children;

export const sliders = (Swiper) => {
    const thumbSlider = new Swiper('.thumb-slider', {
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        watchSlidesProgress: true,
        // on: {
        //     click: function (swiper) {
        //         console.log(swiper);
        //     }
        // }
    });

    const mainSlider = new Swiper('.main-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: thumbSlider,
        },
        on: {
            init: function (swiper) {
                swiper.thumbs.init();
                svgTextList[swiper.realIndex].classList.add('active');
                svgWayList[swiper.realIndex].classList.add('active');
            },
            slideChangeTransitionStart: function (swiper) {
                Array.from([...svgTextList]).find(item => {
                    // item.classList.contains('active') ? item.classList.remove('active') : null;
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
                Array.from([...svgWayList]).find(item => {
                    // item.classList.contains('active') ? item.classList.remove('active') : null;
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
            },

            slideChangeTransitionEnd: function (swiper) {
                svgTextList[swiper.realIndex].classList.add('active');
                svgWayList[swiper.realIndex].classList.add('active');
            },
        },
    });
};


export const hamburger = () => {
    console.log('hamburger');
};
