// Operadores Lógicos - Aula 18

/*
&& -> AND
|| -> OR
! -> NOT
*/

const and = true && true && true && true;
const or = false || false || false || true;

const usuario = 'Higor';
const senha = '123456';

const vaiLogar = usuario === 'Higor' && senha === '123456';
console.log(vaiLogar);