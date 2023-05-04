import {pedirTokensEnSpotify} from '../services/servicioSpotify.js'
import {traerInformacion} from '../services/servicioSpotify.js'

let fila = document.querySelector('#fila')

pedirTokensEnSpotify().then(function(response){
    traerInformacion(response).then(function(datico){
        
        console.log(datico)

        datico.tracks.forEach(function(enlace){
            let card = document.createElement('section')
            card.classList.add("card")
            let foto = document.createElement('img')
            foto.src = enlace.album.images[0].url
            foto.classList.add("img")
            let name = document.createElement('p')
            name.innerHTML = enlace.name
            name.classList.add("p")
            let audio = document.createElement('audio')
            audio.setAttribute("controls","controls")
            audio.src = enlace.preview_url
            card.append(foto)
            card.append(name)
            card.append(audio)
            fila.append(card)
        })
    })
})
