// Tratando e lançando erros (try, catch e finally) - Aula 35

// try - Executa quando não há erros.
// catch - Executa quando há erros.
// finally - Executa de qualquer maneira

function hora(data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    return data.toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


let data = new Date();

try {
    console.log(hora(data));
} catch(err) {
    console.log(err);
}  finally {
    console.log('Tenha um bom dia.')
}