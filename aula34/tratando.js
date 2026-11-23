// Tratando e lançando erros (try, catch e throw) - Aula 34

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.')
    }

    return x + y;
}

try {
    console.log(soma(10, 5));
    console.log(soma('10', 3));
} catch(err) {
    console.log(err)
}