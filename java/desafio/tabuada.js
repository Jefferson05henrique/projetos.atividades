// let tabuada = parseInt(prompt("Digite um número para ver a tabuada:"));

// for(let i = 1; i <= 10; i++){
//     let resultado = tabuada * i;
//     alert(`${tabuada} x ${i} = ${resultado}`);
// }

let tabuada = parseInt(prompt("Digite um número para ver a tabuada:"));
let mensagem = "";

for (let i = 1; i <= 10; i++) {
  let resultado = tabuada * i;
  mensagem += `${tabuada} x ${i} = ${resultado}\n`;
}

alert(mensagem);
