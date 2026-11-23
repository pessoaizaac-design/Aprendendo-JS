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

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
    
    iniciarRelogio();
})

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('pausado')
    relogio.classList.add('zerado');

    relogio.innerHTML = '00:00:00'
    segundos = 0;
})
