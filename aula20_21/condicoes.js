// if, else if and else - Aula 20 / 21

/*

const hora = 50;

function saudacao() {
    if (hora >= 0 && hora <= 11) {
        console.log("Bom-dia");
    } 
    
    else if (hora >= 12 && hora <= 17) {
        console.log("Boa-tarde");
    }

    else if (hora >= 18 && hora <= 23){
        console.log("Boa-noite");
    }

    else {
        console.log("Hora não identificada, tente novamente!");
    };
}

saudacao();

*/

const numero = 10;

function number() {
    if (numero >= 0 && numero <=5) {
        console.log("Sim, o número está entre 0 e 5.")
    }
    else if (numero >= 6 && numero <= 8){
        console.log("O número está entre 6 e 8.")
    }
    else if (numero >= 9 && numero <= 11){
        console.log("O número está entre 9 e 11.")
    }
    else {
        console.log("O número não está entre 0 e 11.")
    }
}
console.log("...Aqui vem o resto do código.")
number();

/*

const numero = 10;

function par() {
    if (numero % 2 === 0) {
        console.log("Sim, o número é par!");
    }
    else {
        console.log("Não, o número é ímpar");
    }
}

par();

*/