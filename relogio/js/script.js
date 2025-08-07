// DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

// Eventos

setInterval(relogio,1000)

// Funções

function relogio(){

    agora = new Date()

    h = agora.getHours()
    m = agora.getMinutes() 
    s = agora.getSeconds()
    
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

    if(h<10){
        h = "0" + h
    }

    if(m<10){
        m = "0" + m
    }

    if(s<10){
        s = "0" + s
    }
    
}