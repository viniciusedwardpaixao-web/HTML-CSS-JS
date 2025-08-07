//dom

const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//eventos

botao.addEventListener('click',imc)

//função

function imc(){
    n = nome.value
    p = Number(peso.value)
    a = Number(altura.value)

    calculo = p/(a**2)
    
    if(calculo<18.5){
        situacao = 'Magreza.'
    }
    else if(calculo>=18.5 && calculo<25){
        situacao = 'Parabéns, peso ideal!'
    }
    else if(calculo>=25 && calculo<30){
        situacao = 'Sobrepeso'
    }
    else{
        situacao = 'Obesidade'
    }

    resultado.innerHTML = `Sr(a) ${n} o seu IMC é ${calculo.toFixed(1)} <br> A sua situação é de ${situacao} `
}