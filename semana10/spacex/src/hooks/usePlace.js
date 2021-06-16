import axios from 'axios'
import { useState,useEffect } from 'react'

const usePlace = () => {

    const [countries,setCountries] = useState([{}])
      
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

    useEffect(() => {
        getCountries()
    }, [])

    return(countries)
}

export default usePlace
