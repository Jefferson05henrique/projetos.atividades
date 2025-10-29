  //Calculadora de IMC com if, else e for

 let pessoas = 3; // número de vezes que o programa vai rodar
 for (let i = 1; i <= pessoas; i++) {
     let peso = parseFloat(prompt("Digite seu peso (kg):"));
     let altura = parseFloat(prompt("Digite sua altura (m):"));

     let imc = peso / (altura * altura);

     let classificacao = "";

     if (imc < 18.5) {
         classificacao = "Abaixo do peso";
     } else if (imc < 25) {
         classificacao = "Peso normal";
     } else if (imc < 30) {
         classificacao = "Sobrepeso";
     } else {
         classificacao = "Obesidade";
     }

     alert("Seu IMC é " + imc.toFixed(2) + " - " + classificacao);
 }

//  let peso = Number(prompt("Digite seu peso (kg):"));
//  let altura = Number(prompt("Digite sua altura (m):"));
//  let imc = peso / (altura * altura);

//  if (imc < 18.5) {
//      alert("Seu índice está abaixo do peso com " + imc.toFixed(2));
//  } else if (imc < 25) {
//      alert("Seu índice está em peso normal " + imc.toFixed(2));
//  } else if (imc < 30) {
//      alert("Seu índice está em Sobrepeso " + imc.toFixed(2));
//  } else {
//      alert("Você tá na Obesidade " + imc.toFixed(2));
//  }

// alert("Seu IMC é " + imc.toFixed(2));
