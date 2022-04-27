const blockBurger = document.querySelector('.nav__burger');
const headerMenu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('.header__close-menu');
const check = document.querySelectorAll('.application-type__item');
const buttonServe = document.querySelectorAll('.serve-block__img-button1');
const serveBlock1 = document.querySelector('.serve__img-block1');
const serveBlockServe = document.querySelector('.serve__img-block__serve');
const serveBlockList = document.querySelector('.serve-block__serve__list');
const closeBut = document.querySelector('.close');
const serveOrder = document.querySelector('.serve__img-block__order');
const serve = document.querySelector('.serve');
const servePrderButton = document.querySelector('.serve-block-order__button');
const serveOrderService = document.querySelector('.serve__img-block__order-service');


blockBurger.addEventListener('click', () => {
    headerMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    body.style.overflow = 'auto';
})

for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', (e) => {
        console.log(e.target.checked)
    })
}
for (let i = 0; i < buttonServe.length; i++) {
    buttonServe[i].addEventListener('click', (e) => {
        serveBlock1.style.display = 'none';
        serveBlockServe.style.display = 'block';
        console.log(serveBlock1.sty);
    })
}
let selectedTd;

serveBlockList.onclick = function (event) {
    let target = event.target;
    highlight(target);
    serveOrder.style.display = 'block'
    // serve.style.opacity = 0.5
    serve.style.backgroundColor = 'rgba(25, 20, 20, 0.4)';
    console.log(serveOrder.style)
};

function highlight(td) {
    if (selectedTd) {
        selectedTd.classList.remove('active__serve');
    }
    selectedTd = td;
    selectedTd.classList.add('active__serve');
}

closeBut.addEventListener('click', () => {
    serveBlock1.style.display = 'block';
    serveBlockServe.style.display = 'none';
})
servePrderButton.addEventListener('click', () => {
    serveOrderService.style.display = 'block';
})
