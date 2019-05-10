document.addEventListener('DOMContentLoaded', () => {
    const initSlider = document.querySelector('.tableSliderImg');
    function startSlider (init){
        $(init).slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
        });
    }
    startSlider(initSlider);
})