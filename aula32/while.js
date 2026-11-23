// While e Do While - Aula 32

// O Do While executa pelo menos uma vez de forma obrigatória.

let controle = 0;

do {
    console.log('Executando de forma obrigatória!')
    controle ++;
} while (controle === 0);

/*
function random(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
*/

/*
const nome = 'Higor'
let controle = 0;

while (controle <= nome.length) {
    console.log(nome[controle])
    controle ++;
}
*/