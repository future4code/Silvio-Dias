import React from 'react'
import useTrips from "../hooks/useTrips"
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import { AreaCard,Candidates,DetailsTrip } from './style';
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
            <Candidates>
                <DetailsTrip>
                    <h1>{Trips.name}</h1>
                    <p>Descirção: {Trips.description}</p>
                    <p>Planeta: {Trips.planet}</p>
                    <p>Data: {Trips.date}</p>
                    <p>Duração em Dias: {Trips.durationInDays}</p>
                </DetailsTrip>
                <AreaCard>
                    <CandidateCard
                        params = {params}
                    />
                </AreaCard> 
                <AreaCard>
                {Trips.approved && Trips.approved.length > 0 && <h1>Aprovados</h1>}
                    <ApprovedCard
                        params = {params}
                    />
                </AreaCard>


            </Candidates>   
            <ButtonArea>
                <ButtonBack
                    h = {history}
                /> 
            </ButtonArea>

        </div>
    )
}

export default TripDetailsPage
