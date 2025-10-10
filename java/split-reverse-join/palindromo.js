// let palavra = "radar"
// let letras = palavra.split("")
// console.log(letras);

// let palavra = "jota";
// let letras = palavra.split("");
// let letrasInvertidas = letras.reverse();
// console.log(letrasInvertidas);

// let palavra = "boina";
// let letras = palavra.split("");
// let letrasInvertidas = letras.reverse();
// let palavraInvertida = letrasInvertidas.join("");
// console.log(palavraInvertida);

let palavra = prompt("Digite uma palavra:");
let invertida = palavra.split("").reverse().join("");


if (palavra === invertida) {
    alert(`A palavra ${palavra} é um palíndromo!`);
} else {
    alert(`A palavra ${palavra} não é um palíndromo!`);
}
