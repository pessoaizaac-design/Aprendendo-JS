
let n = 0
function fizzBuzz(number) {
    if (typeof number !== 'number') return `--> ${number}`;
    if (number % 3 === 0 && number % 5 === 0) return '--> FizzBuzz';
    if (number % 3 === 0) return '--> Fizz';
    if (number % 5 === 0) return '--> Buzz';
    return `--> ${number}`;
}


while (n <= 100) {
    console.log(n, fizzBuzz(n));
    n++;
}