let sinal = prompt(" qual sinal deseja usar? + - * /")

let numero = Number(prompt("digite o numero:"))
let numero2 = Number(prompt("digite o numero:"))


if (sinal === "+") {
   alert(numero + numero2)
} else if (sinal === "-") {
    alert(numero - numero2)
} else if (sinal === "*") {
    alert(numero * numero2)
} else if (sinal === "/") {
    if (numero2 === 0) {
        alert("não dá pra dividir zero irmão")
    } else {
    alert (numero / numero2)
    }
} else {
    alert("operação invalida")
}
