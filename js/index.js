document.addEventListener('DOMContentLoaded', () => {
    const initSlider = document.querySelector('.tableSliderImg');
    function startSlider (init){
        $(init).slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: true,
            prevArrow: '<div><i class="far fa-arrow-circle-left arrw"></i></div>',
            nextArrow: '<div><i class="far fa-arrow-circle-right arrw"></i></div>'
        });
    }
    startSlider(initSlider);
})