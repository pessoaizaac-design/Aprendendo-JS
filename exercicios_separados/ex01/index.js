function meuEscopo() {
    const form = document.querySelector(".form");
    const texto = document.querySelector(".texto");

    const idades = [];

    function realizarEscopo(evento) {
        evento.preventDefault();

        const anoDeNascimento = form.querySelector(".ano-de-nascimento");
        texto.innerHTML += `<p> Sua idade baseada no seu ano de nasciemnto é: ${2026 - anoDeNascimento.value} </p>`

        idades.push(2026 - anoDeNascimento.value);
        console.log(idades);
    }
    form.addEventListener('submit', realizarEscopo);
}
meuEscopo()