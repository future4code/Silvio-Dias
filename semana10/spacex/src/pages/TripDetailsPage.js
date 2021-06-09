import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"


function TripDetailsPage(props) {
    const history = useHistory()
    useProtectedPage()

        const Trips = useTrips("trip",
            "91va6kmh7uIFrYO5HUJz",
            {})
    
        if(Trips){
            console.log(Trips)
        }
    return (
        <div>
        <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default TripDetailsPage
