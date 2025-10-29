// let vezes = 3

// for (let i = 1; i <= 3; i++) {
    
//     let aleatorio = Math.floor(Math.random() * 10 + 1)
//      let usuario = Number(prompt("adivinhe o número de 1 a 10:"))
    
//     EU FIZ ESTE!!!!!!

//       if (usuario == aleatorio) {
//           alert("acertou troxa")
//           break;
//       } else if (usuario !== aleatorio) {
//           alert("vc ainda tem " + ( 3 - vezes) + " tentativas")
//       }
// }

let aleatorio = Math.floor(Math.random() * 10 + 1)

for (let i = 1; i <= 3; i++) {
    

    // FUSÃO DOS DOIS CÓDIGOS

     let usuario = Number(prompt("adivinhe o número de 1 a 10:"))
        let vezes = i

      if (usuario == aleatorio) {
          alert("acertou troxa")
          break;
      } else if (usuario !== aleatorio) {
          alert("vc ainda tem " + ( 3 - vezes) + " tentativas")
      } else{
        alert("suas tentativas acabaram, o número era " + aleatorio)

      }
}

// let aleatorio = Math.floor(Math.random() * 10) + 1;

// for (let i = 1; i <= 3; i++) {
//     let usuario = Number(prompt("Adivinhe o número de 1 a 10:"));
//     console.log("Número sorteado:", aleatorio); // só para teste

//          CHATGPT FEZ ESTE!!!!!

//     if (usuario === aleatorio) {
//         alert("Parabéns, você acertou!");
//         break; // sai do loop
//     } else {
//         let tentativasRestantes = 3 - i;
//         if (tentativasRestantes > 0) {
//             alert("Errou! Você ainda tem " + tentativasRestantes + " tentativas.");
//         } else {
//             alert("Acabaram as tentativas! O número era " + aleatorio);
//         }
//     }
// }
