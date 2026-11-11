// Mais diferenças entre var e let/const - Aula 25

// o var pode ser sobre-escrito.
// let tem escopo de bloco { ... bloco }.
// var só tem escopo de função.

const verdadeira = true;

var sobrenome = 'Pessoa';

function falaOi () {
    var nome = 'Higor';
    
    if (verdadeira) {
        let nome = 'Luiz';
        console.log(nome);
    }
}
falaOi();


