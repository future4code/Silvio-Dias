import React from 'react'
import Cards from '../components/Cards/Cards'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import useTrips from '../hooks/useTrips';
import { ButtonBack}  from "../components/Buttons/ButtonBack"


function AdminHomePage() {
    const history = useHistory()

    useProtectedPage()

    const Trips = useTrips("/trips"
    ,"",[{}])

    const listTrips = Trips.map((trip) => {
        return(
            <div>
            <Cards
                customStyle = "admin"
                name = {trip.name}
                textButton = "Saiba Mais"
                buttonStyle = "secondary"
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
