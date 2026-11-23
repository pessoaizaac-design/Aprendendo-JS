const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function getTime(segundos) {
    const date = new Date(segundos * 1000); 
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};

function iniciarRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getTime(segundos)
    }, 1000);
}