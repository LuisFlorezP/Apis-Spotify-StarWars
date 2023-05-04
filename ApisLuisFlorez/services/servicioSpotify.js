export async function pedirTokensEnSpotify() {
    const URL = "https://accounts.spotify.com/api/token"

    let datoUno = "grant_type=client_credentials"
    let datoDos = "client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let datoTres = "client_secret=63d8eca3cf88416ca881b4f92588b05b"
    const PETICION = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            
        },
        body: `${datoUno}&${datoDos}&${datoTres}`
    }

    let response = await fetch (URL, PETICION)
    let responseToken = await response.json()

    let token = responseToken.token_type + " " + responseToken.access_token
    return token
}

export async function traerInformacion(token) {
    let artist = "1JbemQ1fPt2YmSLjAFhPBv"
    const URL = `https://api.spotify.com/v1/artists/${artist}/top-tracks?market=US`

    const INFO = {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }

    let info = await fetch (URL, INFO)
    let infoJS = await info.json()

    return (infoJS)
}