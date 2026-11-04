let nome = prompt("Digite o seu nome completo:");

document.body.innerHTML += `Seu nome é: <b>${nome}<b/> <br/>`;
document.body.innerHTML += `Seu nome tem: <b>${nome.length}<b/> letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nome[1]}<b/> <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra "a" do seu nome? <b>${nome.indexOf('a')}<b/> <br/>`;
document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? <b>${nome.lastIndexOf('a')}<b/> <br/>`;
document.body.innerHTML += `As últimas três letras do seu nome são: <b>${nome.slice(-3)}<b/> <br/>`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(' ')}<b/> <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nome.toUpperCase()}<b/> <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}<b/> <br/>`