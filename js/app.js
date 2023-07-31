const nightIcon = document.querySelector('.header__night');
const main = document.querySelector('.main');
const portfolio = document.querySelector('.portfolio')
const changeColor = document.querySelectorAll('.change__color')
const workItem = document.querySelectorAll('.portfolio__works-item')
const sun = document.querySelector('.header__sun');
const moon = document.querySelector('.header__moon');
nightIcon.addEventListener('click', function(){
    main.classList.toggle('main--sun');
    portfolio.classList.toggle('portfolio--sun')
    
    changeColor.forEach(function(item){

        item.classList.toggle('color--sun');
    })
    workItem.forEach(function(item){

        item.classList.toggle('portfolio__works-item--sun')

    })
    sun.classList.toggle('header__svg--inactive')
    moon.classList.toggle('header__svg--inactive')
})  
