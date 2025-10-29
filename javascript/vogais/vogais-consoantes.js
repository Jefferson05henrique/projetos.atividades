// 1. texto base
let dialogo = "corinthians".toLowerCase();

// 2. strings de referência
const vogais = "aeiou";

// 3. contadores
let contVogais = 0;
let contConsoantes = 0;

// 4. loop principal
for (let letra of dialogo) {

    // 5. verificar se é uma letra válida (a-z)
    if (/[a-z]/.test(letra)) {
        console.log(letra);

        // 6. se for vogal → soma em vogais
        if (vogais.includes(letra)) {
            contVogais++;
        } else {
            // senão → soma em consoantes
            contConsoantes++;
        }
    }
}

// 7. exibir resultado
console.log("Vogais:", contVogais);
console.log("Consoantes:", contConsoantes);

// esse código eu falhei miseravelmente, tenho que estudar mais. obs: perdi pro chat.
