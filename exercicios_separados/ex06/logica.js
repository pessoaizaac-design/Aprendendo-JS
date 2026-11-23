
const max = (x, y) => x > y ? x : y;

// console.log(max(20, 4));
// console.log(max(15, 8));
//----------------------------------------------------------------------------------------

function verificarNumero(num) {
    if (num > 0) return 'Positivo';
    if (num < 0) return 'Negativo';
    return 'Zero'
}

// console.log(verificarNumero(-1));
//----------------------------------------------------------------------------------------

function verificarAprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2 ;
    if (media >= 7) return 'Aprovado';
    if (media >= 5) return 'Recuperação';
    return 'Reprovado';
}

// console.log(verificarAprovacao(7, 10));
//----------------------------------------------------------------------------------------

const maiorNumero = (n1, n2, n3) => Math.max(n1, n2, n3);

// console.log(maiorNumero(10, 5, 16));
//----------------------------------------------------------------------------------------

function calcularDesconto(preco, desconto) {
    let total = preco - (preco * (desconto / 100));
    return total;
}

// console.log(calcularDesconto(100, 10));
//----------------------------------------------------------------------------------------

const parOuImpar = (numero) => numero % 2 === 0 ? 'Par' : 'Ímpar';

// console.log(parOuImpar(1))
//----------------------------------------------------------------------------------------

const calcularIdade = (anoNascimento) => 2026 - anoNascimento;

// console.log(calcularIdade(2008));
//----------------------------------------------------------------------------------------

let contador = 1;

/*
while (contador <= 100) {
    if (contador % 5 === 0) {
        console.log(contador);
    }
    contador++;
}
*/
//----------------------------------------------------------------------------------------

/*
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return '--> FizzBuzz';
    if (numero % 3 === 0) return '--> Fizz';
    if (numero % 5 === 0) return '--> Buzz';
    return `--> ${numero}`;
}

let cont = 0;

while (cont <= 100) {
    console.log(cont, fizzBuzz(cont));
    cont++;
}
*/

//----------------------------------------------------------------------------------------


