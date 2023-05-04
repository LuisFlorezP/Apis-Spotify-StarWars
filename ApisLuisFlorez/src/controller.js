import {getPeoples} from '../services/serviceStarWars.js'
import {getVehicles} from '../services/serviceStarWars.js'

let people = document.querySelector("#people")
let vehicle = document.querySelector("#vehicle")

getPeoples().then(function(value){

    console.log(value)

    value.forEach(function(peopleValues){
        let card = document.createElement('section')
        card.classList.add('card')
        let namePeopleValue = document.createElement('p')
        let namePeople = document.createElement('p')
        namePeople.innerHTML = "Nombre:"
        namePeople.classList.add('properties')
        namePeopleValue.innerHTML = peopleValues.name
        let skin_colorPeopleValue = document.createElement('p')
        let skin_colorPeople = document.createElement('p')
        skin_colorPeople.innerHTML = "Skin color:"
        skin_colorPeople.classList.add('properties')
        skin_colorPeopleValue.innerHTML = peopleValues.skin_color
        let heightPeopleValue = document.createElement('p')
        let heightPeople = document.createElement('p')
        heightPeople.innerHTML = "Height:"
        heightPeople.classList.add('properties')
        heightPeopleValue.innerHTML = peopleValues.height
        let massPeopleValue = document.createElement('p')
        let massPeople = document.createElement('p')
        massPeople.innerHTML = "Mass:"
        massPeople.classList.add('properties')
        massPeopleValue.innerHTML = peopleValues.mass
        card.appendChild(namePeople)
        card.appendChild(namePeopleValue)
        card.appendChild(skin_colorPeople)
        card.appendChild(skin_colorPeopleValue)
        card.appendChild(heightPeople)
        card.appendChild(heightPeopleValue)
        card.appendChild(massPeople)
        card.appendChild(massPeopleValue)
        people.appendChild(card)
    })
})

getVehicles().then(function(value){
    
    console.log(value)

    value.forEach(function(vehicleValues){
        let card = document.createElement('section')
        card.classList.add('card')
        let nameVehicleValue = document.createElement('p')
        let nameVehicle = document.createElement('p')
        nameVehicle.innerHTML = "Nombre:"
        nameVehicle.classList.add('properties')
        nameVehicleValue.innerHTML = vehicleValues.name
        let modelVehicleValue = document.createElement('p')
        let modelVehicle = document.createElement('p')
        modelVehicle.innerHTML = "Model:"
        modelVehicle.classList.add('properties')
        modelVehicleValue.innerHTML = vehicleValues.model
        let manufacturerVehicleValue = document.createElement('p')
        let manufacturerVehicle = document.createElement('p')
        manufacturerVehicle.innerHTML = "Manufacturer:"
        manufacturerVehicle.classList.add('properties')
        manufacturerVehicleValue.innerHTML = vehicleValues.manufacturer
        let cost_in_creditsVehicleValue = document.createElement('p')
        let cost_in_creditsVehicle = document.createElement('p')
        cost_in_creditsVehicle.innerHTML = "Cost in credits:"
        cost_in_creditsVehicle.classList.add('properties')
        cost_in_creditsVehicleValue.innerHTML = vehicleValues.cost_in_credits
        card.appendChild(nameVehicle)
        card.appendChild(nameVehicleValue)
        card.appendChild(modelVehicle)
        card.appendChild(modelVehicleValue)
        card.appendChild(manufacturerVehicle)
        card.appendChild(manufacturerVehicleValue)
        card.appendChild(cost_in_creditsVehicle)
        card.appendChild(cost_in_creditsVehicleValue)
        vehicle.appendChild(card)
    })
})