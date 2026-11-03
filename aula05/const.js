// Constantes com const - Aula 5

// String = Text | Number = Número

// Você não pode redeclarar a constante! Gera um erro.
// Não podemos criar constantes com palavras reservadas da linguagem.
// Variáveis precisam ter nomes significativos.
// Não pode começar o nome de uma constante com número.
// Não podem conter espaços e traços. Utilizamos o camelCase.
// Case-sensitive. As letras em Caps ou não fazem diferença!
// NÃO podemos modificar o valor de uma constante.

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof(primeiroNumero + segundoNumero));