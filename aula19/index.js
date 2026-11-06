// Short-Circuit - Aula 19

/*
&& --> false && true -> false
|| --> true || false -> true

FALSY - false, 0, "", null, undefined and NaN
*/

// console.log('Luiz' && 'Maria'); // Retorna 'Maria'
// console.log('Luiz' && '' && 'Maria'); // Retorna " "

// console.log(0 || false || null || '"Higor Pessoa"' || true); // Retorna "Higor Pessoa"

// const corUsuario = null;
// const corPadrao = corUsuario || 'Preto';
// console.log(corPadrao); // Retorna "Preto"

function falaOi() {
    return 'Oi'
}

const vaiExecutar = false;

console.log(vaiExecutar || falaOi());