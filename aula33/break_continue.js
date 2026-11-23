// Break e Continue - Aula 33

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 0;
 while (num < numeros.length) {
    let numero = numeros[num];

    if (numero === 2) {
        console.log('Pulei o número 2!')
        num++;
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log("Encerrando o laço!")
        num++;
        break;
    }

    num++;
}