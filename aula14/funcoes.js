// Funções em JavaScript - Aula 15

function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Higor');
// console.log(variavel);

function soma(num1 = 1, num2 = 1) {
    const resultado = num1 + num2;
    return resultado;
}

// console.log(soma());

const raiz = (num) => num ** (1/2);

console.log(raiz(9));