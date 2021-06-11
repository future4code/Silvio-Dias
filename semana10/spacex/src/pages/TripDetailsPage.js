import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import Card from "../components/Cards/Cards"
import { AreaCard } from './style';


function TripDetailsPage(props) {

    useProtectedPage()

    const history = useHistory()
    const params = useParams()

        const Trips = useTrips("/trip",
            params.id,
            {})
        console.log(Trips)

        const listCandidates = Trips.candidates && Trips.candidates.map((candidate) => {
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
            <AreaCard>
                {listCandidates}
            </AreaCard> 
            <ButtonBack
                h = {history}
            /> 
        </div>
    )
}

export default TripDetailsPage
