// for of - Aula 31

const nomes = ['Higor', 'Barbosa', 'Habreu'];

for (let letra of nomes) {
    console.log(letra);
}

console.log("---------" );

nomes.forEach(function (el) {
    console.log(el);
})