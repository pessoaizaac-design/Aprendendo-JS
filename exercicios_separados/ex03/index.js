function meuEscopo() {
    const form = document.querySelector(".form");
    const texto = document.querySelector(".texto");

    const tarefas = [];

    function verMeuEscopo(evento) {
        evento.preventDefault();

        const tarefa = form.querySelector(".tarefa").value;

        texto.innerHTML += `<p> - ${tarefa} </p>`

        tarefas.push(tarefa);
        console.log(tarefas);
    }
    form.addEventListener('submit', verMeuEscopo);
}
meuEscopo();