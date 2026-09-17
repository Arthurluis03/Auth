// import manipulaForm from "../js/login.js";



const botoesSenha = document.querySelectorAll(".ver_Senha");

botoesSenha.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const input = this.parentElement.querySelector("input");
        const img = this.querySelector("img");

        if (input.type === "password") {
            input.type = "text";
            img.src = "/src/images/hide.png";
        } else {
            input.type = "password";
            img.src = "/src/images/olho.png";
        }

    });

});
