// switch / case (05)

console.log('Exercicio 13');

let diaDaSemana = 1;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
}

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 14");

function operacoes(numero1, numero2, operacao) {
    switch (operacao) {
        case "+":   
            return numero1 + numero2;
        case "-":   
            return numero1 - numero2;
        case "x":   
            return numero1 * numero2;
        case "/":   
            return numero1 / numero2;
        default:
            return "Operaçao indisponível";
    }
}

console.log(operacoes(10, 20, 'x'));

console.log(" ");

//----------------------------------------------------------------------------------------

// while (06)

console.log("Exercício 15");

let number = 0;
let total = [];

while (number <= 20) {
    total.push(number);
    number++;
}

console.log(total);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 16");

let n = 1;
let soma = 0;

while (n <= 100) {
    soma += n;
    n++;
}

console.log(soma);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 17");

/*
const senhaCorreta = "1234";
let tentativa = prompt("Digite a senha:");

while (tentativa !== senhaCorreta) {
    tentativa = prompt("Senha incorreta! Tente novamente:");
}

alert("Acesso permitido!");
*/

console.log(" ")

//----------------------------------------------------------------------------------------

// for (07)

console.log("Exercício 18");

function tabuada (n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

tabuada(2);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 19");

function pares () {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        } 
    }
}

pares();

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 20");

function fatorial(numero) {
    if (numero < 0) {
        return "Fatorial não definido para números negativos";
    }

    let total = 1;

    for (let i = 2; i <= numero; i++) {
        total *= i;
    }

    return total;
}

console.log(fatorial(4)); // 24
console.log(fatorial(5)); // 120

console.log(" ");

//----------------------------------------------------------------------------------------