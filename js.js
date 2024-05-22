

// 首頁背景輪撥
$(document).ready(function () {
    $('.carousel-content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // autoplay: true,
        autoplaySpeed: 2000,
    });
});


//首頁優勢輪撥
$('.advantage-container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
});

let advantage_i = document.querySelectorAll(".index-advantage ul li");

advantage_i.forEach(function (li, index) {
    li.addEventListener("click", function () {
        $('.advantage-container').slick('slickGoTo', index);
    });
});

$(".advantage-container").on("afterChange", function (event, slick, currentSlide) {
    advantage_i.forEach(function (li) {
        li.classList.remove("advantage-current");
    });
    advantage_i[currentSlide].classList.add("advantage-current");
})


// 首頁商品輪撥
$('.product-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
        { // 定義響應式設置
            breakpoint: 992, // 媒體查詢斷點
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

$('.commodity-prev').click(function () {
    $('.product-container').slick('slickPrev');
});
$('.commodity-next').click(function () {
    $('.product-container').slick('slickNext');
});




// 首頁雙輪動
$('.news-container-a').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.news-container-b',
    // autoplay: true,
    autoplaySpeed: 2000,
});
$('.news-container-b').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.news-container-a',
    dots: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        { // 定義響應式設置
            breakpoint: 450, // 媒體查詢斷點
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});




//嚴選品質-輪播

// 流程
$('.process-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 450,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});



//品質
$('.quality-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 450,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
// 初始化
$('.process-carousel').slick('refresh');
$('.quality-carousel').slick('refresh');


// 品質按鈕
$('.quality-prev').click(function () {
    $('.quality-carousel').slick('slickPrev');
});
$('.quality-next').click(function () {
    $('.quality-carousel').slick('slickNext');
});
// 流程
$('.process-prev').click(function () {
    $('.process-carousel').slick('slickPrev');
});
$('.process-next').click(function () {
    $('.process-carousel').slick('slickNext');
});










// 模組化元件

// 下拉展開
let m_dropmenu_btn = document.querySelector(".m_title");
let m_arrow = document.querySelector(".m_arrow");
let m_list = document.querySelector(".m_list");
let m_list_state = 0;

if (m_dropmenu_btn) {
    m_dropmenu_btn.addEventListener("click", function () {

        if (m_list_state === 0) {
            m_list_state += 1;
            m_list.classList.add("m_list_open");
            m_arrow.classList.add("m_arrow_down");
        } else {
            m_list_state = 0;
            m_list.classList.remove("m_list_open");
            m_arrow.classList.remove("m_arrow_down");
        }
    });
}



