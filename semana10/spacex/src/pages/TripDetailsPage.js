import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import Card from "../components/Cards/Cards"


function TripDetailsPage(props) {
    const history = useHistory()
    useProtectedPage()

        const Trips = useTrips("/trip",
            "91va6kmh7uIFrYO5HUJz",
            {})

        const listCandidates = Trips.candidates.map((candidate) => {
            return(
                <Card
                name = {candidate.name}
                description = {candidate.applicationText}
                place = {candidate.country}
                ocupation = {candidate.profession}
                date = {candidate.age}
                textButton = "Aprovar"           
                />
            )
        })

    return (
        <div>
            <h1>{Trips.name}</h1>
            <p>{Trips.description}</p>
            <p>{Trips.planet}</p>
            <p>{Trips.date}</p>
            <p>{Trips.durationInDays}</p>
            {listCandidates}
            <ButtonBack
                h = {history}
            /> 
        </div>
    )
}

export default TripDetailsPage
