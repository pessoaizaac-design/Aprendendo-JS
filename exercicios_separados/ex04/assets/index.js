const form = document.querySelector('.form');

form.addEventListener('submit', function verEscopo(evento){
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso');
    const inputDistancia = evento.target.querySelector('#distancia');

    const peso = Number(inputPeso.value);
    const distancia = Number(inputDistancia.value);

    if (!peso && !distancia) {
        setAtributo('Peso e Distância inválidos', false);
        return;
    }
    if (!peso) {
        setAtributo('Peso inválido', false);
        return;
    }
    if (!distancia) {
        setAtributo('Distância inválida', false);
        return;
    }

    const valorFrete = calcularFrete(peso, distancia);
    const situacao = situacaoFrete(distancia);

    const msg = `O valor total do frete foi: ${valorFrete.toFixed(2)} (${situacao})`;
    setAtributo(msg, true)
})

function calcularFrete(peso, distancia) {
    const valorBruto = peso * distancia * 0.15
    return valorBruto;
}

function situacaoFrete(distancia) {
    let situacoes = ['Entrega Local (Prazo: 1 dia útil)', 'Entrega Regional (Prazo: 3 dias úteis)', 'Entrega Nacional (Prazo: 7 dias úteis)'];

    if (distancia >= 200) return situacoes[2];
    if (distancia >= 51) return situacoes[1];
    return situacoes[0];
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setAtributo(msg, isValid) {
    const texto = document.querySelector('.texto');
    texto.innerHTML = '';

    const p = criarP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    texto.appendChild(p);
}