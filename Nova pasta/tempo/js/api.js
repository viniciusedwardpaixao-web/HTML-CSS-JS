// Dom

const dcidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const icone = document.querySelector('#icone')
const previsao = document.querySelector('.texto-previsao')
const key = 'c4240bcc996840023072beb2a6358119'

// Evento

botao.addEventListener('click', btpesquisar)

// Função

async function btpesquisar(){
    procura_cidade = dcidade.value
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${procura_cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    cidade.textContent = `Tempo em ${dados.name}`

    temperatura.textContent = `${(dados.main.temp).toFixed(0)}ºC`

    previsao.textContent = `${(dados.weather[0].description)}`

    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}