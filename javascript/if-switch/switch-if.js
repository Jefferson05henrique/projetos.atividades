let login = prompt("Enter your login", "");
let senha = prompt("Enter your password", "");

let loginCerto = "jefin"
let senhaCerta = "12345"

if (login == loginCerto && senha == senhaCerta) {
    alert("vou ter transferir")

    alert("opções: \n 1 - Saldo \n 2 - Transferência \n 3 - Pagamento \n 4 - consigado \n 5 - Sair")
    let opções = Number(prompt("Escolha uma opção: "))

    switch (opções) {
        case 1:
            alert("Seu saldo é de R$ 1.000,00")    
            break;
        case 2:
            alert("Transferência selecionada")
            break;
        case 3:
            alert("Pagamento selecionado")
            break;
        case 4:
            alert("Consignado selecionado")
            break;
        case 5:
            alert("Saindo...")
            break;
    
        default:
            alert("opção inválida")
            break;
    }
} else {
    alert("tá no erro pai")
}