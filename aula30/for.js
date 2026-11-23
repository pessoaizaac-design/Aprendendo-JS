// for in - Aula 30

// for in -> lê os índices ou chaves do objeto

//                 0        1          2         3
const pessoa = {
    nome: 'Higor',
    sobrenome: 'Pessoa',
    idade: 18
};

for (let chave in pessoa) {
    console.log(chave + ':', pessoa[chave]);
}

// for (let i in frutas) {
//    console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i ++) {
//   console.log(frutas[i]);
// }