function meuEscopo() {
    const texto = document.querySelector(".texto");
    const form = document.querySelector(".form")

    const dados = {
        nome: 'Higor',
        idade: 18,
        profissao: 'Estagiário'
    }

    function verMeuEscopo(evento) {
        evento.preventDefault();

        texto.innerHTML += `
            Nome: ${dados.nome}<br>
            Idade: ${dados.idade}<br>
            Profissão: ${dados.profissao}
        `;
        console.log(dados);
    }
    form.addEventListener('submit', verMeuEscopo);
}
meuEscopo();