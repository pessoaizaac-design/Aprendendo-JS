// Valores primitivos e valores por referência - Aula 16

/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint and symbol
--> Valores copiados

Referência (mutável) arrays, object and function
--> Passados por referência
*/

let a = 'A';
let b = a; // Cópia
// console.log(a, b);

a = 'Outra Coisa';
// console.log(a,b);

let lista = [1, 2, 3];
let listaDois = lista;
let listaTres = listaDois;
console.log(lista, listaDois);

lista.push(4);
console.log(lista, listaDois);

lista.pop(listaDois);
console.log(listaDois, lista);

console.log(listaTres);
