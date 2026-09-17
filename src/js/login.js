import app from "./api.js"
const form = document.querySelector('form')
document.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', manipulaForm)
})




async function manipulaForm(event) {

    event.preventDefault()

    const email = document.getElementById("email_login").value
    const senha = document.getElementById("password_login").value

    if (!email || !senha) {

        alert("Campos obrigatórios")

        return
    }

    try {

        const result = await app.LoginUser({
            email: email,
            senha: senha
        })

        localStorage.setItem("token", result.token)

        window.location.href = "src/pages/dashbord.html"

    } catch (error) {

        console.error(error)

        alert(error.message)
    }
}


const buttonLogout = document.getElementById("sairButton")

if (buttonLogout) {

    buttonLogout.addEventListener("click", () => {

        localStorage.removeItem("token")

        window.location.href = "../../index.html"

    })

}

export default manipulaForm