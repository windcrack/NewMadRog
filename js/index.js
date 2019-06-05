document.addEventListener('DOMContentLoaded', () => {
    const initSlider = document.querySelector('.tableSliderImg'),
        imgSlider = document.querySelectorAll('.imgInSlider'),
        modalsBody = document.querySelector('.modalBodyPopupS'),
        callBack = document.querySelector('.callBack'),
        request = document.querySelector('.request'),
        sale = document.querySelector('.sale'),
        phone = document.querySelector('.phoneBlock > a'),
        modalPopup = document.querySelector('.modalPopup'),
        modalImg = document.querySelector('.modalImg');

    console.log(phone);
    
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

    function openBlockImg(img, block) {
        if (img !== null) {
            img.forEach(target => {
                target.addEventListener('click', e => {
                    e.preventDefault()
                    block.style.display = 'block'
                    document.querySelector('body').style.overflowY = 'hidden'
                })
            })
        }
    }

    function openSingBlock(trigger, block) {
        if (trigger !== null) {
            trigger.addEventListener('click', () => {
                block.style.display = 'block'
                callModalPopup()
            })
        }
    }

    function closeBLock(target) {
        if (target !== null) {
            target.addEventListener('click', () => {
                target.style.display = 'none'
                document.querySelector('body').style.overflowY = 'visible'
            })
        }
    }

    document.querySelector('body').addEventListener('click', e => {
        let target = e.target;
        if (target.classList.contains('close') || target.classList.contains('far')) {
            modalPopup.style.display = 'none'
        }
    })

    const dataText = {
        titleSale: `Запрос стоимости`,
        subTitile: `Фронтальный Мульчер DAF`,
        titleReq: `Заявка`,
        subTitleReq: `в сервисный центр`
    }
    function callModalPopup() {
        
        // console.log(target)
        if (sale) {
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <h2 class="modalPopupTitleOther">${dataText.titleSale}</h2>
            <h3 class="modalSubTitle">${dataText.subTitile}</h3>
            <form action="" class="modalPopupForm">
                <label for="name">Организация</label>
                <input id="name" type="text">
                <label for="email">E-mail</label>
                <input id="email" type="text">
                <label for="phone">Телефон</label>
                <input id="phone" type="text">
                <label for="mess">Сообщение</label>
                <textarea name="" id="mess" class="callBack"></textarea>
                <div class="modalRules">
                    <input type="checkbox" id="check"><label for="check">Я прочитал(а) и соглашаюсь с правилами сайта и
                        даю свое согласие на обработку персональных данных. <a href="#">Политика
                            конфеденциальности</a></label>
                </div>
                <div class="button"><i class="far fa-paper-plane"></i><span>Отправить</span></div>
            </form>
        `
        }
        if(request){
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <h2 class="modalPopupTitleOther">${dataText.titleReq}</h2>
            <h3 class="modalSubTitle">${dataText.subTitleReq}</h3>
            <form action="" class="modalPopupForm">
                <label for="name">Организация</label>
                <input id="name" type="text">
                <label for="email">E-mail</label>
                <input id="email" type="text">
                <label for="phone">Телефон</label>
                <input id="phone" type="text">
                <label for="mess">Сообщение</label>
                <textarea name="" id="mess" class="callBack"></textarea>
                <div class="modalRules">
                    <input type="checkbox" id="check"><label for="check">Я прочитал(а) и соглашаюсь с правилами сайта и
                        даю свое согласие на обработку персональных данных. <a href="#">Политика
                            конфеденциальности</a></label>
                </div>
                <div class="button"><i class="far fa-paper-plane"></i><span>Отправить</span></div>
            </form>
        `
        }
        if(callBack){
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <h2 class="modalPopupTitle">Обратный звонок</h2>
            <form action="" class="modalPopupForm">
                <label for="name">имя</label>
                <input id="name" type="text">
                <label for="phone">Телефон</label>
                <input id="phone" type="text">
                <label for="mess">Сообщение</label>
                <textarea name="" id="mess" class="callBack"></textarea>
                <div class="modalRules">
                    <input type="checkbox" id="check"><label for="check">Я прочитал(а) и соглашаюсь с правилами сайта и
                        даю свое согласие на обработку персональных данных. <a href="#">Политика
                            конфеденциальности</a></label>
                </div>
                <div class="button"><i class="far fa-paper-plane"></i><span>Отправить</span></div>
            </form>
            `
        }

    }

    function innerPhone() {
        if(document.documentElement.clientWidth <= 800){
            phone.setAttribute('href', 'tel:88005055812')
        }
    }

    innerPhone();

    startSlider(initSlider)
    openBlockImg(imgSlider, modalImg)
    openSingBlock(request, modalPopup)
    openSingBlock(sale, modalPopup)
    openSingBlock(callBack, modalPopup)
    closeBLock(modalImg)
    // closeBLock(modalPopup)
})