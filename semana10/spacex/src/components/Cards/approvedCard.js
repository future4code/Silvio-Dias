import React from 'react'
import loading from "../../Image/loading.svg"
import useTrips from "../../hooks/useTrips"
import Card from "./Cards"

function ApprovedCard(props) {
    const params = props.params

    
    const Trips = useTrips("/trip",
    params.id,
    {})



    console.log(Trips.approved)

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
    
    if(!Trips.approved){
        return(
            <img src= {loading}></img> 
        )
    }


    return (
        <div>
            {listApproved}
        </div>
    )
}

export default ApprovedCard
