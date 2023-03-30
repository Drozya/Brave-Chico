!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {
    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){
        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();
            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    }); // end foreach
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
}); // end ready

setTimeout(function(){
    $('#loader').removeClass('show').addClass('show');
},1500);

var no_active_delay = 2.5; // Количество секунд простоя мыши, при котором пользователь считается неактивным
var now_no_active = 0; // Текущее количество секунд простоя мыши
setInterval("now_no_active++;", 1500); // Каждую секунду увеличиваем количество секунд простоя мыши
setInterval("updateChat()", 2500); // Запускаем функцию updateChat() через определённый интервал
document.onmousemove = activeUser; // Ставим обработчик на движение курсора мыши
function activeUser() {
    now_no_active = 0; // Обнуляем счётчик простоя секунд
}
const delays = 3500;
const times = 2500;
const opass = 5000;
function updateChat() {

    if (now_no_active >= no_active_delay) { // Проверяем не превышен ли "предел активности" пользователя

        const max = 80;

        loc = document.querySelector('.frogi');
        loc1 = document.querySelector('.cipaf');
        loc2 = document.querySelector('.croco');
        loc3 = document.querySelector('.tigr');
        loc.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
        loc.style.left = `${Math.floor(Math.random()*max + 1)}%`
        loc1.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
        loc1.style.left = `${Math.floor(Math.random()*max + 1)}%`
        loc2.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
        loc2.style.left = `${Math.floor(Math.random()*max + 1)}%`
        loc3.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
        loc3.style.left = `${Math.floor(Math.random()*max + 1)}%`
        setTimeout(function(){
            loc = document.querySelector('.frogi');
            loc1 = document.querySelector('.cipaf');
            loc2 = document.querySelector('.croco');
            loc3 = document.querySelector('.tigr');
            loc.style.opacity =  `0`
            loc1.style.opacity =  `0`
            loc2.style.opacity =  `0`
            loc3.style.opacity =  `0`
        },2000);
        setTimeout(function(){
            loc = document.querySelector('.frogi');
            loc1 = document.querySelector('.cipaf');
            loc2 = document.querySelector('.croco');
            loc3 = document.querySelector('.tigr');
            loc.style.opacity =  `1`
            loc1.style.opacity =  `1`
            loc2.style.opacity =  `1`
            loc3.style.opacity =  `1`
        },3500);

        var input = document.querySelector('.input-text');
        if (now_no_active >= no_active_delay) {
            var newValue = +input.value - 10;
            $('.minus').addClass('active');
            if (newValue >= 0) {
                input.value = newValue;
            }
            if (newValue <= 0) {
                document.location.href = 'page1.html'
            }
            if (newValue >= 10) {
                setTimeout(function () {
                    $('.minus').removeClass('active');
                }, 2000);
            }
        }

        return;
    }

    const max = 80;

    loc = document.querySelector('.frogi');
    loc1 = document.querySelector('.cipaf');
    loc2 = document.querySelector('.croco');
    loc3 = document.querySelector('.tigr');
    loc.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
    loc.style.left = `${Math.floor(Math.random()*max + 1)}%`
    loc1.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
    loc1.style.left = `${Math.floor(Math.random()*max + 1)}%`
    loc2.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
    loc2.style.left = `${Math.floor(Math.random()*max + 1)}%`
    loc3.style.top =  `${Math.floor(Math.random()*(max + 1))}%`
    loc3.style.left = `${Math.floor(Math.random()*max + 1)}%`

    setTimeout(function(){
        loc = document.querySelector('.frogi');
        loc1 = document.querySelector('.cipaf');
        loc2 = document.querySelector('.croco');
        loc3 = document.querySelector('.tigr');
        loc.style.opacity =  `0`
        loc1.style.opacity =  `0`
        loc2.style.opacity =  `0`
        loc3.style.opacity =  `0`
    },2000);
    setTimeout(function(){
        loc = document.querySelector('.frogi');
        loc1 = document.querySelector('.cipaf');
        loc2 = document.querySelector('.croco');
        loc3 = document.querySelector('.tigr');
        loc.style.opacity =  `1`
        loc1.style.opacity =  `1`
        loc2.style.opacity =  `1`
        loc3.style.opacity =  `1`
    },3500);
}

const delay = 500;
const opas = 1500;
const time = 0;

const rndBtn = document.querySelector('#img');
rndBtn.addEventListener('click', randomize, false )

const rndBtn1 = document.querySelector('#img1');
rndBtn1.addEventListener('click', randomize, false )

const rndBtn2 = document.querySelector('#img2');
rndBtn2.addEventListener('click', randomize, false )

const rndBtn3 = document.querySelector('#img3');
rndBtn3.addEventListener('click', randomize, false )

function randomize(e) {
    const max = 80;
    loc = document.querySelector('.frogi');
    loc1 = document.querySelector('.cipaf');
    loc2 = document.querySelector('.croco');
    loc3 = document.querySelector('.tigr');
    setTimeout(function() {
        loc.style.top = `${Math.floor(Math.random() * (max + 1))}%`
        loc.style.left = `${Math.floor(Math.random() * max + 1)}%`
        loc1.style.top = `${Math.floor(Math.random() * (max + 1))}%`
        loc1.style.left = `${Math.floor(Math.random() * max + 1)}%`
        loc2.style.top = `${Math.floor(Math.random() * (max + 1))}%`
        loc2.style.left = `${Math.floor(Math.random() * max + 1)}%`
        loc3.style.top = `${Math.floor(Math.random() * (max + 1))}%`
        loc3.style.left = `${Math.floor(Math.random() * max + 1)}%`
    }, delay);
    setTimeout(function(){
        loc.style.opacity =  `0`
        loc1.style.opacity =  `0`
        loc2.style.opacity =  `0`
        loc3.style.opacity =  `0`
    },time);
    setTimeout(function(){
        loc.style.opacity =  `1`
        loc1.style.opacity =  `1`
        loc2.style.opacity =  `1`
        loc3.style.opacity =  `1`
    },opas);
}

counters = document.querySelectorAll('.games');

function minusPoints(input, n){
    var newValue = input.value - n;
    $('.minus').addClass('active');
    if (newValue >= 0) {
        input.value = newValue;
    }
    if (newValue <= 0) {
        document.location.href = 'page1.html'
    }
    setTimeout(function(){
        $('.minus').removeClass('active');
    },2000);
}

function plusPoints(input, n){
    input.value = +input.value + 10;
    $('.plus').addClass('active');
    setTimeout(function(){
        $('.plus').removeClass('active');
    },2000);
}

counters.forEach(function(counter) {
    var input = counter.querySelector('.input-text');

    counter.querySelector('.down').onclick = function () {
        minusPoints(input, 10)
    };
    counter.querySelector('.down1').onclick = function () {
        minusPoints(input, 10)
    };
    counter.querySelector('.down2').onclick = function () {
        minusPoints(input, 10)
    };

    counter.querySelector('.up').onclick = function () {
        plusPoints(input, 10)
    };
});

var fiveSeconds = new Date().getTime() + 180000;
jQuery("#timer").countdown(fiveSeconds, {elapse: true})
    .on('update.countdown', function(event) {
        var $this = jQuery(this);
        if (event.elapsed) {
            document.location.href = 'page1.html'
        } else {
            $this.html(event.strftime('<span>%M:%S</span>'));
        }
    });