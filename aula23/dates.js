//  Dates - Aula 23

// const nomeVar = (new) Date( (ano), (mes), (dia). (hora), (minutos), (segundos), (ms) )
// const nameVar = (new) Date( 'ano-mes-dia hora-minuto-segundo' )
// o mês começa a partir do 0!
// os segundos vão até 59
// os ms vão até 999

// Date.now(); Mostra os Ms de todos os tempos desde 1970

const data = new Date();
console.log("Dia -->", data.getDate());
console.log("Ano -->", data.getFullYear());
console.log("Mês -->", data.getMonth()); // Mês começa do zero
console.log("Hora -->", data.getHours());
console.log("Min -->", data.getMinutes());
console.log("Seg -->", data.getSeconds());
console.log("Ms -->", data.getMilliseconds());
console.log("Dia semana -->", data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString()); // mostra a data no padrão dos EUA


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(date) {
    const data = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());
    const seg = zeroAEsquerda(date.getSeconds());

    return `${data}/${mes}/${ano}/ - ${hora}:${min}:${seg}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(dataAtual);
console.log(dataBrasil);