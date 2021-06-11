import React from 'react'
import usePlace from '../../hooks/usePlace'

function SelectCountry(props) {

    const planets = ["Mercury","Venus","Earth","Mars","Jupiter"
    ,"Saturn","Uranus","Neptune"]

    const countries = usePlace()

    
    const listCountries =  countries.map((place) => {
        return(
            <option key = {place.name} value = {place.name}> {place.name}</option>
        )
    })

    const listPlanet = planets.map((planet) => {
        return(
            <option>{planet}</option>
        )
    })


    return (
        <div>
        <select name = {props.nameSelect} onChange = {props.action}>
            {props.admin ? (<option>Escolha um planeta</option>):(<option>País</option>)}
            {props.admin ? listPlanet:listCountries}         
        </select>

        </div>
    )
}

export default SelectCountry
