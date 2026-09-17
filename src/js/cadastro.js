import app from "./api.js"

const buttonCadastro = document.getElementById("button_confirmCadastro")

buttonCadastro.addEventListener("click", manipulaCadastro)

async function manipulaCadastro() {

    console.log("1 - botão clicado")

    const nome = document.getElementById("nome_cadastro").value
    const email = document.getElementById("email_cadastro").value
    const senha = document.getElementById("password_cadastro").value
    const confirmarSenha = document.getElementById("password_confirmCadastro").value

    console.log("2 - dados:", {
        nome,
        email,
        senha,
        confirmarSenha
    })

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos")
        return
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem")
        return
    }

    console.log("3 - enviando para API")

    try {

        const result = await app.RegistrarUser({
            nome,
            email,
            senha
        })

        console.log("4 - resposta:", result)

        alert("Cadastro realizado com sucesso")

    } catch (error) {

        console.log("5 - erro:", error)
        alert(error.message)

    }
}