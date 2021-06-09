import React from 'react'
import Cards from "../components/Cards/Cards"
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"
import useTrips from "../hooks/useTrips"
import { AreaCard } from '../components/Cards/styled';

function ListTripsPage(props) {
    const history = useHistory()

    const Trips = useTrips("trips"
    ,"",[{}])

    console.log(Trips)

    const listTrip = Trips.map((trip) =>{
        return (
            <div>
                <Cards
                    name = {trip.name}
                    description = {trip.description}
                    place = {trip.planet}
                    ocupation = {trip.durationInDays}
                    date = {trip.date}
                />
            </div>

        )
    })

return (
    <div>
        <AreaCard>
            {listTrip}
        </AreaCard>
        <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
    </div>
)
}

export default ListTripsPage
