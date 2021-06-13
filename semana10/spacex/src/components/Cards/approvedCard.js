import React from 'react'
import useTrips from "../../hooks/useTrips"
import Card from "./Cards"
import { loadingPage } from '../../scripts/loading'

function ApprovedCard(props) {
    const params = props.params

    const Trips = useTrips("/trip",
    params.id,
    {})

    const listApproved = Trips.approved && Trips.approved.map((candidate) => {
            
        return(
            <Card
            name = {candidate.name}
            description = {candidate.applicationText}
            place = {candidate.country}
            ocupation = {candidate.profession}
            date = {candidate.age}
            noButtom = {true}
            />
        )

    })
    
    return (
        <div>
            {!Trips.approved?loadingPage():listApproved}
        </div>
    )
}

export default ApprovedCard
