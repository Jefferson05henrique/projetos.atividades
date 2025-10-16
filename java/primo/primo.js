let numeroPrimo = Number(prompt("digite um numero:"));
let contador = 0; 

for (let index = 1; index <= numeroPrimo; index++) {

    if (Number.isInteger(numeroPrimo / index)) {
        contador++;
        
    }
}

 if (contador === 2){
        alert(`${numeroPrimo} é um número primo`)
    }else {
        alert(`${numeroPrimo} não é um numero primo`)
    }

    // aqui eu conseguir, porém não tava sabendo como descobrir o número primo
    //  e ainda tenho dificuldade em usar o for