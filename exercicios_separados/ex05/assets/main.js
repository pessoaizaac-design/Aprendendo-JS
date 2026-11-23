const resumoPedido = [
        { tag: 'h2', texto: 'Teclado Mecânico RGB' },
        { tag: 'p', texto: 'Quantidade: 1 unidade' },
        { tag: 'strong', texto: 'Total: R$ 289,90' },
        { tag: 'em', texto: 'Previsão de entrega: Quinta-feira' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (item in resumoPedido) {
    const { tag, texto } = resumoPedido[item];
    const elementoCriado = document.createElement(tag);

    elementoCriado.innerText = texto;
    div.append(elementoCriado);
}
container.appendChild(div);