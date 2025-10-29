// let num = Number(prompt(" digite um número: "))


// if (num % 2 === 0) {
//     alert(num + " é um número par ")
// } 
//  else {
//     alert(num + " é um número impar")
// }


let continuar = "sim"; // começa como "sim" para entrar no loop

while (continuar.toLowerCase() === "sim") {
    let num = Number(prompt("Digite um número:"));

    if (isNaN(num)) {
        alert("Isso não é um número válido!");
    } else if (num === 0) {
        alert("O número 0 é neutro.");
    } else if (num % 2 === 0) {
        alert(num + " é um número par.");
    } else {
        alert(num + " é um número ímpar.");
    }

    continuar = prompt("Quer testar outro número? (sim/não)");
}

alert("Programa encerrado!");
