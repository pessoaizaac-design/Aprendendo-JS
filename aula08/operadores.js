// Operadores aritméticos - Aula 8

/*
 ==> + = Soma e Concatenação
 ==> - = Subtração
 ==> * = Mutiplicação
 ==> ** = Potenciação
 ==> / = Divisão
 ==> % = Resto da divisão
 ==> ++ = Incremento
 ==> -- = Decremento
 ==> += --> -= --> *= = Operadores de contribuição

 ==> NaN = Not a number
*/

/*
Precedência dos operadores
==> ()
==> **
==> * --> / --> %
==> + --> -
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
const string = '5'

console.log(num1 + num2, '--> Soma'); // 30
console.log(num2 - num1, '--> Subtração'); // 10
console.log(string + num1, '--> Concatenação'); // 510

console.log(num1 ** 2, '--> Potenciação'); // 100

console.log(num1 / 2, '--> Divisão') // 5
console.log(num1 % 3, '--> Resto da divisão'); // 1

console.log(num1 * num2 / num3, '--> Precedência');

let contador = 1;
contador ++; // 2
contador ++; // 3
contador ++; // 4
contador ++; // 5
console.log(contador, '--> Incremento')

let contadorDois = 10;
contadorDois --; // 9
contadorDois --; // 8
contadorDois --; // 7
contadorDois --; // 6
console.log(contadorDois, '--> Decremento')

let contadorTres = 0;
const passo = 2;
contadorTres += passo; // 2
console.log(contadorTres, '--> Incremento com mais simplicidade');

const number = 10;
const numberDois = parseInt('5');
console.log(number * numberDois, '--> O JS resolve diretamente para você') 