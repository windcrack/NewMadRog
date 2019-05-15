document.addEventListener('DOMContentLoaded', () => {
    const initSlider = document.querySelector('.tableSliderImg'),
        imgSlider = document.querySelectorAll('.imgInSlider'),
        modalImg = document.querySelector('.modalImg');

    function startSlider(init) {
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

    function openBlock(img, block) {
        img.forEach(target =>{
            target.addEventListener('click', e =>{
                e.preventDefault();
                block.style.display = 'block';
                document.querySelector('body').style.overflowY = 'hidden';
                
            })
        })

    }

    function closeBLock(target){
        target.addEventListener('click', ()=>{
            target.style.display = 'none';
            document.querySelector('body').style.overflowY = 'visible';
        })
    }

    startSlider(initSlider);
    openBlock(imgSlider, modalImg);
    closeBLock(modalImg)
})