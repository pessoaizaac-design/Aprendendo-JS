function meuEscopo() {
    const form = document.querySelector(".form");
    const texto = document.querySelector(".texto");

    const pessoas = [];

    function receberMeuEscopo(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");


        texto.innerHTML += `<p> ${nome.value} ${sobrenome.value}, ${peso.value}Kg e ${altura.value}m </p>`

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(pessoas)
    }   
    form.addEventListener('submit', receberMeuEscopo);
}
meuEscopo()