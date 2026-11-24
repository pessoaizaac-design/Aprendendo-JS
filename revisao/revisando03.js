// do while (08)

console.log("Exercício 21");

/*
let idade;

do {
    idade = Number(prompt("Informe uma idade:"))
} while (idade > 0 || idade < 120)
 */

console.log(" ");

//----------------------------------------------------------------------------------------


console.log("Exercício 22");

let total = 0;
let numeroInicial = 1;

do {
    total += numeroInicial;
    numeroInicial++;
} while (numeroInicial <= 10)

console.log(total);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 23");

const numeros = [5, 10, 15, 20, 25];
let c = 0;
let t = 0;

do {
    t += numeros[c];
    c++;
} while (c < numeros.length)

console.log(t);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 24")

const tentativas = [1234, 5678, 9999, 2026];
const senhaCorreta = 2026;

let elemento = 0;
let tentativa = 0;

do {
    tentativa++;
    elemento++;

} while (
    tentativas[elemento - 1] !== senhaCorreta &&
    elemento < tentativas.length
);

console.log(`Tentativas: ${tentativa}`);

console.log(" ");

//----------------------------------------------------------------------------------------

// break / continue (09)

console.log("Exercício 25");

let nums = [];

for (let n = 1; n <= 100; n++) {
    if (n % 13 === 0) {
        console.log("Achamos o primeiro número divisível por 13!")
        break;
    }
    nums.push(n);
}

console.log(nums);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 26");

let nums2 = [];

for (let n = 1; n <= 50; n++) {
    if (n % 2 === 0) {
        continue;
    }
    nums2.push(n);
}

console.log(nums2);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 27");

let sequencia = [];

for (let numeros = 1; numeros <= 100; numeros++) {
    if (numeros % 3 === 0) {
        continue;
    }
    if (numeros % 7 === 0 && numeros > 50) {
        break;
    }
    sequencia.push(numeros);
}

console.log(sequencia);

console.log(" ");

//----------------------------------------------------------------------------------------

// Date (10)

console.log("Exercício 28");

let data = new Date();

const diaNumero = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const diaEscrito = data.getDay() + 1;

console.log(`${diaNumero} / ${mes} / ${ano} - ${diaEscrito}`);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 29");

const data1 = new Date('2026-01-01');
const data2 = new Date('2026-12-31');

const diffMs = data2 - data1;
const diffDias = diffMs / (1000 * 60 * 60 * 24);

console.log(diffDias); 

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 30");

const dataA = new Date("2026-03-15T10:00:00");
const dataB = new Date("2026-08-20T14:30:00");

if (dataA < dataB) {
    console.log("dataA aconteceu primeiro.");
} else if (dataA > dataB) {
    console.log("dataB aconteceu primeiro.");
} else {
    console.log("As duas datas são iguais.");
}