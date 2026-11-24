// Math (01)

const number = 1.65;

console.log("Exercício 01");

console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));

//----------------------------------------------------------------------------------------

console.log(" ");;

console.log("Exercício 02");

const numbers = [10, 15, 22, 13, 45];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 03");

const numeroAleatorio = Math.round(Math.random() * (50 - 10) + 10);

if (numeroAleatorio % 2 === 0) {
    console.log(`${numeroAleatorio} é Par!`);
} else {
    console.log(`${numeroAleatorio} é Ìmpar!`)
}

console.log(" ");

//----------------------------------------------------------------------------------------

// Arrays (02)

console.log("Exercício 04");

let nomes = ['Higor', 'Pedro', 'Dimitri', 'Everton', 'Júlia'];

nomes.push('Rafaela');
console.log(nomes);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log('Exercício 05');

let frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Melância', 'Kiwi'];

frutas.pop();
frutas.pop();
console.log(frutas);

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 06");

let produtos = ['Borracha', 'Caneta', 'Lápis'];

produtos.push('Marcador');
produtos.push('Estojo');
produtos.pop();
console.log(produtos)

console.log(" ");

//----------------------------------------------------------------------------------------

// functions(03)

console.log('Exercício 07');

function soma(x, y) {
    return x + y + ": Soma total";
}

console.log(soma(10, 5));

console.log(" ");

//----------------------------------------------------------------------------------------

console.log('Exercício 08');

function converterTemperatura(temp) {
    return (temp * 9/5) + 32 + "F°: Temperatura convertida";
}

console.log(converterTemperatura(10));

console.log(" ");

//----------------------------------------------------------------------------------------

console.log('Exercício 09');

function calcularDesconto(valor, desconto) {
    return valor - (valor * desconto/100) +  "R$: Valor com desconto!"
}

console.log(calcularDesconto(100, 10));

console.log(" ");

//----------------------------------------------------------------------------------------

// condicionais(04)

console.log('Exercício 10');

function situacaoDaNota(nota) {
    if (nota >= 9) {
        return `${nota} (Excelente)`;
    } 
    else if (nota >= 7) {
        return `${nota} (Bom)`;
    } 
    else if (nota >= 5) {
        return `${nota} (Recuperação)`;
    } else{
        return `${nota} (Reprovado)`
    }
}

console.log(situacaoDaNota(4.9));

console.log(" ")

//----------------------------------------------------------------------------------------

console.log('Exercícios 11');

function positivoNegativo(n) {
    if (n < 0) {
        return n + ": Negativo"
    } else {
        return n + ": Positivo"
    }
}

console.log(positivoNegativo(10));
console.log(positivoNegativo(-10));

console.log(" ");

//----------------------------------------------------------------------------------------

console.log("Exercício 12");

function aplicarDesconto(preco) {
    if (preco >= 500) {
        return preco - (preco * 0.20) + ": Valor com 20% de desconto!";
    }
    if (preco >= 200) {
        return preco - (preco * 0.10) + ": Valor com 10% de desconto!";
    }
    return preco + ": Valor sem desconto aplicado!";
}

console.log(aplicarDesconto(600));
console.log(aplicarDesconto(250));
console.log(aplicarDesconto(190));

console.log(" ");

//----------------------------------------------------------------------------------------