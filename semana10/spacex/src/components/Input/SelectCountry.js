import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

function SelectCountry(props) {
    const [countries,setCountries] = useState([{}])

    const planets = ["Mercury","Venus","Earth","Mars","Jupiter"
    ,"Saturn","Uranus","Neptune"]



    useEffect(() => {
        getCountries()
    }, [])
      

    const getCountries = () => {
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
                setCountries(response.data)
        })
        .catch((err) => {
           alert(err)
        })
    }

    const listCountrie = countries.map((countrie) => {
        return(
                <option value = {countrie.name}>{countrie.name}</option>
        )
    })

    const listPlanets = planets.map((planet) => {
        return(
            <option>{planet}</option>
        )
    })
  


    return (
        <div>
        <select onChange = {props.action}>
            {props.admin ?(<option>País</option>):(<option>Escolha um planeta</option>)}
            {props.admin ? listCountrie:listPlanets}           
        </select>

        </div>
    )
}

export default SelectCountry
