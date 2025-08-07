// DOM
const x = document.querySelector('#ftx')
const btphp = document.querySelector('#btphp')
const btreact = document.querySelector('#btreact')
const btjs = document.querySelector('#btjs')
const btnodejs = document.querySelector('#btnodejs')

// EVENTOS
btphp.addEventListener('click',php)
btreact.addEventListener('click', react)
btjs.addEventListener('click',js)
btnodejs.addEventListener('click',nodejs)

// FUNÇÕES
function php(){
    x.src= "images/php.png"
}
function react(){
    x.src= "images/react.png"
}
function js(){
    x.src= "images/js.png"
}
function nodejs(){
    x.src= "images/nodejsverde.webp"
}