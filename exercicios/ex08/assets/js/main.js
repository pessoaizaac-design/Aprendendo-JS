const form = document.querySelector(".form");

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        setResultado('Peso e Altura inválidos', false);
        return;
    }

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]; 
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <= 18.5) return nivel[0];
    
}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p
};

function setResultado (msg, isValid) {
    const texto = document.querySelector('.texto');
    texto.innerHTML = '';

    const p = criaP();
    
    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    texto.appendChild(p);
};

/*
function meuEscopo() {
    const form = document.querySelector(".form");
    const texto = document.querySelector(".texto");

    const pesos = [];

    function verMeuEscopo(evento) {
        evento.preventDefault();

        const peso = Number(form.querySelector("#peso").value);
        const altura = Number(form.querySelector("#altura").value);

        const imc = peso / (altura ** 2);
        let resultado = '';

        if (!peso && !altura) {
            texto.innerHTML = `<p> Peso e Altura inválidos </p>`
            return
        }

        if (!peso) {
            texto.innerHTML = `<p> Peso inválido </p>`
            return
        }

        if (!altura) {
            texto.innerHTML = `<p> Altura inválida </p>`
            return
        }

        //Menos do que 18,5 — Abaixo do peso
        //Entre 18,5 e 24,9 — Peso normal
        //Entre 25 e 29,9 — Sobrepeso
        //Entre 30 e 34,9 — Obesidade grau 1
        //Entre 35 e 39,9 — Obesidade grau 2
        //Mais do que 40 — Obesidade grau 3

        if (imc <= 18.4) {
            resultado = 'Abaixo do peso';
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resultado = 'Peso normal';
        }
        else if (imc >= 25 && imc <= 29.9) {
            resultado = 'Sobrepeso';
        }
        else if (imc >= 30 && imc <= 34.9) {
            resultado = 'Obesidade grau 1';
        }
        else if (imc >= 35 && imc <= 39.9) {
            resultado = 'Obesidade grau 2';
        }
        else {
            resultado = 'Obesidade grau 3'
        };

        texto.innerHTML = `<p> Seu IMC é: ${imc.toFixed(2)} (${resultado}) </p>`;

        pesos.push ({
            peso: peso,
            altura: altura,
            imc: imc,
            classificacao: resultado
        });
        console.log(pesos);
    }
    form.addEventListener("submit", verMeuEscopo);
}
meuEscopo();

*/