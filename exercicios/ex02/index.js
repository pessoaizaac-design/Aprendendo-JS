// Normalmente não variam depois de um tempo!
const nome = 'Higor';
const sobrenome = 'Pessoa';
const alturaEmM = 1.67;

// Podem variar.
let idade = 18;
let pesoEmKg = 65.5;
let anoAtual = 2026;

// Usam valores que variam.
let indiceMassaCorporal = pesoEmKg / alturaEmM ** 2;
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${pesoEmKg}`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);