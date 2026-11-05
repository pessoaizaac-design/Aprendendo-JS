// Introdução a objeto - Aula 15

// const pessoa1 = {
   // nome: 'Higor',
   // sobrenome: 'Pessoa',
   // idade: 18
// };

// const pessoa2 = {
  //  nome: 'Pedro',
  //  sobrenome: 'Barbosa',
  //  idade: 17
// };


function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Higor','Pessoa', 28);
const pessoa2 = criaPessoa('Pedro','Barbosa', 17);
const pessoa3 = criaPessoa('Yuri','Figueiredo', 19);
const pessoa4 = criaPessoa('Rogério','Costa', 22);

console.log(pessoa1.nome)