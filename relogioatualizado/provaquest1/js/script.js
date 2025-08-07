// DOM
const imgtrocar = document.querySelector("#imgtrocar")
const btvingadores = document.querySelector("#btvingadores")
const btbatman = document.querySelector("#btbatman")
const btcorra = document.querySelector("#btcorra")
const btsuperman = document.querySelector("#btsuperman")


// Evento
btvingadores.addEventListener('click',vingadores)
btbatman.addEventListener('click',batman)
btcorra.addEventListener('click',corra)
btsuperman.addEventListener('click',superman)

// Funções
function vingadores(){
    imgtrocar.src= "images/vingadores.jpg"
  
}

function batman(){
    imgtrocar.src= "images/batman.jpg"
}

function corra(){
    imgtrocar.src= "images/corra.webp"
    texto.innerHTML = ''

}

function superman(){
    imgtrocar.src= "images/superman.webp"
    texto.innerHTML = ''

}


