const dadosPerfil = [
        { tag: 'h3', texto: 'Ana Silva' },
        { tag: 'p', texto: 'Desenvolvedora Front-end Senior' },
        { tag: 'span', texto: 'Disponível para novos projetos' },
        { tag: 'small', texto: 'São Paulo - SP' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < dadosPerfil.length; i++) {
    const { tag, texto } = dadosPerfil[i];
    let elementoCriado = document.createElement(tag);

    elementoCriado.innerText = texto;
    div.appendChild(elementoCriado);
}
container.appendChild(div);