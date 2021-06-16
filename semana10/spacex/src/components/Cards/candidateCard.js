import React from 'react'
import axios from "axios"
import useTrips from "../../hooks/useTrips"
import Card from "./Cards"
import { BASE_URL, headers } from '../../constants/url';
import { useParams } from "react-router-dom";
import { loadingPage } from '../../scripts/loading'


function CandidateCard(props) {

    const params = props.params

    const Trips = useTrips("/trip",
    params.id,
    {})

    const decideCandidate = (id) => {
        const body = {approve: true}
        axios
        .put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`,body,headers)
        .then((response) => {
            alert(response.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const listCandidates = Trips.candidates && Trips.candidates.map((candidate) => {
        return(

                <Card
                name = {candidate.name}
                description = {candidate.applicationText}
                place = {candidate.country}
                ocupation = {candidate.profession}
                date = {candidate.age}
                textButton = "Aprovar"   
                actionButton = {() => decideCandidate(candidate.id)}        
                />

        )
    })

    return (
        <div>
            {!Trips.candidates ? loadingPage():listCandidates}
        </div>
    )
}

export default CandidateCard
