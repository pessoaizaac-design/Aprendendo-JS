const form = document.querySelector('.form');

form.addEventListener('submit', function app(event) {
    event.preventDefault();

    const inputValor = document.querySelector('#valor');
    const inputMes = document.querySelector('#meses');

    const valor = Number(inputValor.value);
    const meses = Number(inputMes.value);

    if (!valor && !meses) {
        setAtributo('Valor e Quantidade de meses inválidos!', false);
        return;
    }
    if (!valor) {
        setAtributo('Valor inválido!', false);
        return;
    }
    if (!meses) {
        setAtributo('Quantidade de meses inválidas!', false);
        return;
    }

    const economia = getValorEconomia(valor, meses);
    const situacao = getSituacao(economia);

    const msg = `Sua economia em ${meses} meses foi de ${economia.toFixed(2)} (${situacao})`;
    setAtributo(msg, true);
})

function getValorEconomia(valor, meses) {
    const economiaMensal = valor * meses;

    if (meses >= 12) return economiaMensal * 1.05;
    return economiaMensal;
}

function getSituacao(economiaMensal) {
    const situacoes = ['Reserva Inicial', 'Fundo de Emergência em Construção', 'Reserva Consolidada', 'Patrimônio Avançado']

    if (economiaMensal > 15000) return situacoes[3];
    if (economiaMensal > 5001) return situacoes[2];
    if (economiaMensal > 1001) return situacoes[1];
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
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    texto.appendChild(p);
}