async function verifyResponse(response) {
    if (!response.ok) {
        const erro = await response.json()

        throw new Error(
            erro.message || `Erro http: ${response.status}`
        )
    }

    return response
}

function obterToken() {
    return localStorage.getItem("token")
}

function headerAuth() {
    const token = obterToken()

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

function httpHeader() {
    return {
        "Content-Type": "application/json"
    }
}

const url_base = "http://localhost:3000/user"

const app = {

    async listUser() {

        try {

            const response = await fetch(`${url_base}`, {
                method: "GET",
                headers: headerAuth()
            })

            await verifyResponse(response)

            return response.json()

        } catch (error) {

            console.error(error)

            throw error
        }
    },


    async RegistrarUser(register) {
    try {
        const response = await fetch(`${url_base}/Registro`, {
            method: "POST",
            headers: httpHeader(),
            body: JSON.stringify(register)
        })

        await verifyResponse(response)
        return response.json()

    } catch (error) {
        console.error(error)
        throw error
    }
},


    async LoginUser(login) {

        try {

            const response = await fetch(`${url_base}/auth/login`, {
                method: "POST",
                headers: httpHeader(),
                body: JSON.stringify(login)
            })

            await verifyResponse(response)

            return response.json()

        } catch (error) {

            console.error(error)

            throw error
        }
    }

}

export default app