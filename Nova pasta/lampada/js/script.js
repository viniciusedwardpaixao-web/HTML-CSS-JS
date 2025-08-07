//dom

const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//eventos

btligar.addEventListener('click',ligar)
btdesligar.addEventListener('click',desligar)

//funções

function ligar(){
    lampada.src = 'imagens/lampada-acesa.png'
}

function desligar(){
    lampada.src = 'imagens/lampada-apagada.png'
    
}

