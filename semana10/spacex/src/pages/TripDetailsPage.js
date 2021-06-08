import React from 'react'
import useTrips from "../hooks/useTrips"

function TripDetailsPage(props) {
    const history = useHistory()

        const Trips = useTrips("trip",
            "91va6kmh7uIFrYO5HUJz",
            {})
    
        if(Trips){
            console.log(Trips)
        }
    return (
        <div>
        <Button text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default TripDetailsPage
