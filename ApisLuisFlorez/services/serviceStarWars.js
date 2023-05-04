export async function getPeoples() {
    const URL = "https://swapi.dev/api/people/"

    const INFO = {
        method: "GET"
    }

    let result = await fetch(URL, INFO)
    let response = await result.json()
    return (response.results)
}

export async function getVehicles() {
    const URL = "https://swapi.dev/api/vehicles/"

    const INFO = {
        method: "GET"
    }

    let result = await fetch(URL, INFO)
    let response = await result.json()
    return (response.results)
}