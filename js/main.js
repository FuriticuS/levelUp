new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    autoHeight: true,
    slidesPerView: 3,
    loop: true,
    freeMode: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

$(document).ready(function () {
    $(".head-order").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// timer
const countDownEl = document.getElementById('timer');
let time = 1800;

setInterval(function (){
    let min = Math.floor(time / 60);
    let sec = time % 60;

    if(min === '00'){
        min = Math.floor(time / 60);
    }

    min = min < 10 ? '0'+min : min;
    sec = sec < 10 ? '0'+sec : sec;

    countDownEl.innerHTML = `00 : ${min} : ${sec}`;
    time--;
}, 1000);
