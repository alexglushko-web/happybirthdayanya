'use strict'
window.addEventListener('load', ()=> {
    $('.slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: false,
        accessibility: false,
        autoplay: false, 
        draggable: false,      // Отключить перетаскивание мышью
        swipe: false,          // Отключить свайп на мобильных устройствах
        touchMove: false,      // Отключить перетаскивание касанием
        focusOnSelect: false, // Отключить переход по клику на слайд
        accessibility: false   // Отключить навигацию с клавиатуры (по желанию)
    })
    
    $('.next').on('click', function() {
        $('.slider').slick('slickNext'); 
    });

    
    $('#bus1').on('click', function() {
        alert('УУУААААУУУУ, какой ты умный!!! Едем дальше!')
        $('.slider').slick('slickNext'); 
    });
    $('#bus2').on('click', function() {
        let wrong = prompt('А вот и нет! ХЫ-ХЫ-ХЫ, штрафной вопрос, у каких верблюдов три горба?)')
        if (wrong == 'у беременных'  || wrong == 'У беременных' || wrong == 'беременных'  || wrong == 'Беременных') {
            alert('Правильно! Молодец умный кролик!')
            $('.slider').slick('slickNext'); 
        }
        else {
            document.getElementById('bus1').style.display = 'none'
            setTimeout(() => {
                alert('А вот и неть, теперь останешься без подарка, пока не ответишь! Хы-хы-хы')
            }, 300);
        }
    });
    $('#bike-btn').on('click', function() {
        let value = document.getElementById('bike-input').value.toLowerCase()
        if (
            value == 'член' ||
            value == 'хуй' ||
            value == 'хер' ||
            value == 'писька' ||
            value == 'пиписька'
        ){
            let answer = prompt('Ай-ай-ай, как ни стыдна?) Теперь ты должна совершить страстный поцелуй того, о чем подумала и ввести код, который я тебе назову, иначе УСЕ!')
            if (answer == '69') {
                alert('Так держать)')
                $('.slider').slick('slickNext')
            }
        }
        else if (value == 'велик' || value == 'велосипед') {
            alert('Жулик!!!')
            $('.slider').slick('slickNext')
        }
        else {
            alert('Неа, подумай еще раз, ответ же так очевиден)')
        }
    });
    $('#math-btn').on('click', function() {
        let value = document.getElementById('math-input').value.toLowerCase()
        if (
            value == '20'
        ){
            alert('Аболютно так! Ты невероятный гений мысли, отец русской демократии! Ты по праву заслужила свой подарок, как самая умная принцесса во вселенной!')
            $('.slider').slick('slickNext'); 
            var audio = new Audio('./sound.mp3');
            audio.play();
        }
        else {
            alert('Неть, но дам подсказку...')
            alert('e - это не переменная, а число Эйлера)))')
        }
    });
})
