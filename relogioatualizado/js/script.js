// DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const mensagem = document.querySelector('#mensagem')
const corpo = document.querySelector('body')

// Eventos

setInterval(relogio,1000)

// Funções

function relogio(){

    agora = new Date()

    h = agora.getHours()
    m = agora.getMinutes() 
    s = agora.getSeconds()

    d = agora.getDate()
    mo = agora.getMonth()+1
    a = agora.getFullYear()
    
    if(h<10){
        h = "0" + h
    }

    if(m<10){
        m = "0" + m
    }

    if(s<10){
        s = "0" + s
    }

    if(d<10){
        d = "0" + d
    }
    if(mo<10){
        mo = "0" + mo
    }
    
    if(h>=5 && h<12){
        mensagem.textContent = 'Bom dia!'
        corpo.className = "dia"
    }
    else if(h>=12 && h<18){
        mensagem.textContent = 'Boa tarde!'
        corpo.className = "dia"
    }
    else{
        mensagem.textContent = 'Boa noite!'
        corpo.className = "noite"
    }


    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    dia.textContent = d
    mes.textContent = mo
    ano.textContent = a
    

}