import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import Card from "../components/Cards/Cards"
import { AreaCard } from './style';
import { BASE_URL, headers } from '../constants/url';
import axios from "axios"
import loading from "../Image/loading.svg"
import { ButtonArea } from "./style"


function TripDetailsPage(props) {

    useProtectedPage()

    const history = useHistory()
    const params = useParams()

        const Trips = useTrips("/trip",
            params.id,
            {})

        console.log(Trips)

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

        const listApproved = Trips.approved && Trips.approved.map((candidate) => {
            
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


        if(!Trips.candidates){
            return(
                <img src= {loading}></img> 
            )
        }

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
                {Trips.approved && Trips.approved.length > 0 && <h1>Aprovados</h1>}
                {listApproved}
            <ButtonArea>
                <ButtonBack
                    h = {history}
                /> 
            </ButtonArea>

        </div>
    )
}

export default TripDetailsPage
