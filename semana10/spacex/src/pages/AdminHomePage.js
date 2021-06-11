import React from 'react'
import Cards from '../components/Cards/Cards'
import { useHistory } from "react-router-dom";
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import useTrips from '../hooks/useTrips';
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import axios from "axios"
import { BASE_URL, headers } from "../constants/url"


function AdminHomePage() {
    const history = useHistory()

    useProtectedPage()

    const Trips = useTrips("/trips"
    ,"",[{}])

    const goToDetailPage = (id) => {
        history.push(`detalhes-de-viagem/${id}`);
    }

    const deleteTrip = (id) => {
        console.log(BASE_URL + "/trips", id, headers)
        axios
        .delete(`${BASE_URL}/trips/${id}`,headers)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const listTrips = Trips.map((trip) => {
        return(
            <div>
            <Cards
                customStyle = "admin"
                name = {trip.name}
                textButton = "Saiba Mais"
                buttonStyle = "secondary"
                actionButton = {() => deleteTrip(trip.id)}
            />
        </div>
        )


    })

    return (
        <div>
            {listTrips}
            <Button text = "Logout"/>
            <ButtonBack
            h = {history}
            /> 
        </div>

    )
}

export default AdminHomePage
