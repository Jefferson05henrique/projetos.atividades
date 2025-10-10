let nome = prompt("Digite o nome do aluno:")
let nota = parseFloat(prompt("digite a nota do 1• bimestre: "))
let nota2 = parseFloat(prompt("digite a nota do 2• bimestre: "))
let nota3 = parseFloat(prompt("digite a nota do 3• bimestre: "))

let media = (nota + nota2 + nota3) / 3 

if (media >= 6) {
    alert(`O aluno ${nome} teve uma média de ${media.toFixed(2)} e foi aprovado!`)
} else {
    alert(`O aluno ${nome} teve uma média de ${media.toFixed(2)} e foi reprovado!`)
}


// let nome = prompt("Digite o nome do aluno:");
// let materias = ["Matemática", "Português", "Ciências", "História", "Geografia"];
// let medias = [];
// let somaGeral = 0;

// for (let i = 0; i < materias.length; i++) {
//     let nota1 = parseFloat(prompt(`Digite a 1ª nota de ${materias[i]}:`));
//     let nota2 = parseFloat(prompt(`Digite a 2ª nota de ${materias[i]}:`));
//     let media = (nota1 + nota2) / 2;

//     medias.push(media);
//     somaGeral += media;
// }

// let mediaGeral = somaGeral / materias.length;

// let resultado = `Boletim de ${nome}\n---------------------\n`;

// for (let i = 0; i < materias.length; i++) {
//     let situacao;
//     if (medias[i] >= 6) {
//         situacao = "Aprovado";
//     } else if (medias[i] >= 4) {
//         situacao = "Recuperação";
//     } else {
//         situacao = "Reprovado";
//     }

//     resultado += `${materias[i]}: média ${medias[i].toFixed(2)} → ${situacao}\n`;
// }

// resultado += `---------------------\nMédia geral: ${mediaGeral.toFixed(2)}\n`;

// if (mediaGeral >= 6) {
//     resultado += "Situação final: Aprovado 🎉";
// } else if (mediaGeral >= 4) {
//     resultado += "Situação final: Recuperação ⚠️";
// } else {
//     resultado += "Situação final: Reprovado ❌";
// }

// alert(resultado);
