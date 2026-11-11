// Atribuição via desestruturação (Objects) - Aula 27

// Só muda o tipo de dados pra desestruturação de array (teoricamente)!

const pessoa = {
    nome: 'Higor',
    sobrenome: 'Pessoa',
    idade: 18,
    endereco: {
        rua: 'Av Norte',
        numero: '293'
    }
};

const { nome, sobrenome, ...resto } = pessoa
console.log(nome, sobrenome, resto);