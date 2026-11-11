// Operação ternária - Aula 22

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = 'Rosa';
const corPadrao = corUsuario === null ? 'Preta' : `${corUsuario}`;
console.log(corPadrao);