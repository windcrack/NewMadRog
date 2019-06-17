document.addEventListener('DOMContentLoaded', () => {
    const initSlider = document.querySelector('.tableSliderImg'),
        imgSlider = document.querySelectorAll('.imgInSlider'),
        hero = document.querySelector('.hero'),
        modal = document.querySelector('.modal'),
        modalsBody = document.querySelector('.modalBodyPopupS'),
        bugFix = document.querySelector('.button > .mainArr'),
        callBack = $('[href="#selectMost"]'),
        request = document.querySelector('.request'),
        sale = document.querySelector('.sale'),
        phone = document.querySelector('.phoneBlock > a'),
        listButton = document.querySelectorAll('.buttonList'),
        modalPopup = document.querySelector('.modalPopup'),
        modalImg = document.querySelector('.modalImg');

    console.log(callBack);

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
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
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
    document.querySelector('.modalPopup').addEventListener('click', e => {
        if (e.target.id != 'child') return;
        modalPopup.style.display = 'none'
    })


    const dataText = {
        titleSale: `Запрос стоимости`,
        subTitile: `Фронтальный Мульчер DAF`,
        titleReq: `Заявка`,
        subTitleReq: `в сервисный центр`
    }

    const list = document.querySelectorAll('.buttonList'),
        tehnology = document.querySelectorAll('.technologyStats'),
        span = document.querySelectorAll('.buttonList > span'),
        main = document.querySelector('main');
    

    console.log(span)
    function hideCont(a){
        for(let i = a; i < tehnology.length; i++){
            tehnology[i].classList.remove('show')
            tehnology[i].classList.add('hide')
        }
    }
    hideCont(1)

    function showCont(b){
        if(tehnology[b].classList.contains('hide')){
            tehnology[b].classList.remove('hide')
            tehnology[b].classList.add('show')
        }
    }

    main.addEventListener('click', (e)=>{
        
        let target = e.target
        e.stopPropagation();
        console.log(target)
        if(target && target.classList.contains('buttonList')){
            for(let i = 0; i < list.length; i++){
                if(target == list[i]){
                    hideCont(0)
                    showCont(i)
                    break;
                }
            }
        }
        if (target.classList.contains('text')){
            for(let i = 0; i < span.length; i++){
                if(target == span[i]){
                    hideCont(0)
                    showCont(i)
                    break;
                }
            }
        }
    })

    function callModalPopup() {

        // console.log(target)
        if (sale) {
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <div class="mainBodyModal">
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
            </div>
        `
        }
        if (request) {
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <div class="mainBodyModal">
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
            </div>
        `
        }
        if (callBack) {
            modalsBody.innerHTML = `
            <div class="close">Закрыть<i class="far fa-times"></i></div>
            <div class="mainBodyModal">
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
            </div>
            `
        }

    }

    function innerPhone() {
        if (document.documentElement.clientWidth <= 800) {
            phone.setAttribute('href', 'tel:88005055008')
        }
    }

    function changeClass(button) {
        $(button).click(function (e) {
            e.preventDefault();
            $(button).removeClass('active');
            $(this).addClass('active');
        })
    }
    function scroller(trigg) {
        trigg.on('click', function (e) {
            let godesc = $(this)
            $('html, body').stop().animate({
                scrollTop: $(godesc.attr('href')).offset().top
            }, 1000)
            e.preventDefault()
        })
    }

    changeClass(listButton);

    innerPhone();
    
    scroller(callBack)
    startSlider(initSlider)
    openBlockImg(imgSlider, modalImg)
    openSingBlock(request, modalPopup)
    openSingBlock(hero, modalPopup)
    openSingBlock(sale, modalPopup)
    closeBLock(modalImg)
})