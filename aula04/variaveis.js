// Variáveis com let - Aula 4

let nome = 'Higor'; // String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome ,'conheu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 1015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Você não pode redeclarar a variável! Gera um erro.
// Não podemos criar variáveis com palavras reservadas da linguagem.
// Variáveis precisam ter nomes significativos.
// Não pode começar o nome de uma variável com número.
// Não podem conter espaços e traços. Utilizamos o camelCase.
// Case-sensitive. As letras em Caps ou não fazem diferença!
// Não podemos redeclarar variáveis com let.

let nomeVariavel; // Declarou a variável.
let nomevariavel;

nomevariavel = 'Outro valor';
nomeVariavel = 'Qualquer valor'; // Inicializando a variável.

console.log(nomeVariavel);
console.log(nomevariavel);