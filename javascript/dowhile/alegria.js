let login
let senha

let loginCerto = "jefin"
let senhaCerta = "123jefin"

let tentativas = 3

while (tentativas > 0) {
    login = prompt("Digite seu login:")
    senha = prompt("Digite sua senha:")
 if (login === loginCerto && senha === senhaCerta) {
    alert("acesso permitido")
  
} else {
    tentativas--
    if (tentativas > 0) {
        alert("login ou senha incorretos, restam" + tentativas + "tentativas")
    } else {
        alert("acesso bloqueado, procure o administrador")
    }
}
}