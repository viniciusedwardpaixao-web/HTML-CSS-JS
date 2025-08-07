// DOM
const silhueta = document.querySelector('#silhueta')
const btraiva = document.querySelector('#btraiva')
const btalegria = document.querySelector('#btalegria')
const btnojinho = document.querySelector('#btnojinho')
const bttristeza = document.querySelector('#bttristeza')

// EVENTOS
btraiva.addEventListener('click',raiva)
btalegria.addEventListener('click',alegria)
btnojinho.addEventListener('click',nojinho)
bttristeza.addEventListener('click',tristeza)



// FUNÇÕES
function raiva(){
    silhueta.src ="imagens/01.png"
}
function alegria(){
    silhueta.src ="imagens/02.png"
}
function nojinho(){
    silhueta.src ="imagens/03.png"
}
function tristeza(){
    silhueta.src ="imagens/04.png"
}