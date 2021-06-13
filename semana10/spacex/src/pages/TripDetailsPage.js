import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import { AreaCard } from './style';
import { ButtonArea } from "./style"
import CandidateCard from '../components/Cards/candidateCard';
import ApprovedCard from '../components/Cards/approvedCard';


function TripDetailsPage(props) {
    const params = useParams()

    useProtectedPage()

    const Trips = useTrips("/trip",
    params.id,
    {})

    const history = useHistory()

    return (
        <div>
            <h1>{Trips.name}</h1>
            <p>{Trips.description}</p>
            <p>{Trips.planet}</p>
            <p>{Trips.date}</p>
            <p>{Trips.durationInDays}</p>
            <AreaCard>
                <CandidateCard
                    params = {params}
                />
            </AreaCard> 
                {Trips.approved && Trips.approved.length > 0 && <h1>Aprovados</h1>}
                <ApprovedCard
                    params = {params}
                />
            <ButtonArea>
                <ButtonBack
                    h = {history}
                /> 
            </ButtonArea>

        </div>
    )
}

export default TripDetailsPage
