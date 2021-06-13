import React from 'react'
import Cards from './Cards'
import { useHistory } from "react-router-dom";
import useTrips from "../../hooks/useTrips"
import { loadingPage } from '../../scripts/loading';

function TripCard() {

    const history = useHistory()

    const Trips = useTrips("/trips"
    ,"",[{}])

    const goToCandidate = (id) => {
        history.push(`cadastro-candidatura/${id}`);
    }

    const listTrip = Trips.map((trip) =>{
        return (
            <div>
                <Cards
                    customStyle = "user"
                    name = {trip.name}
                    description = {trip.description}
                    place = {trip.planet}
                    ocupation = {trip.durationInDays}
                    date = {trip.date}
                    action = {() => alert('oi')}
                    textButton = {"Cadastrar"}
                    buttonStyle = "secondary"
                    actionButton = {() => goToCandidate(trip.id)}

                />
            </div>
        )
    })

    return (
        <div>
            {Trips.length <= 1? loadingPage():listTrip}
        </div>
    )
}

export default TripCard
