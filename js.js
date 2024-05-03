

// 首頁背景
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
// 商品
$('.product-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});
$('.commodity-prev').click(function () {
    $('.product-container').slick('slickPrev');
});
$('.commodity-next').click(function () {
    $('.product-container').slick('slickNext');
});


// 雙輪動
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
});


//嚴選品質輪播
//流程
$('.process-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});
$('.process-prev').click(function () {
    $('.process-carousel').slick('slickPrev');
});
$('.process-next').click(function () {
    $('.process-carousel').slick('slickNext');
});

//品質
$('.quality-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});
$('.quality-prev').click(function () {
    $('.quality-carousel').slick('slickPrev');
});
$('.quality-next').click(function () {
    $('.quality-carousel').slick('slickNext');
});