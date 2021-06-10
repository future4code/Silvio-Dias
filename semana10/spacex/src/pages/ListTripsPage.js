import React from 'react'
import Cards from "../components/Cards/Cards"
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useTrips from "../hooks/useTrips"
import { AreaCard } from '../components/Cards/styled';

function ListTripsPage(props) {
    const history = useHistory()

    const Trips = useTrips("/trips"
    ,"",[{}])

    console.log(Trips)

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
                    textButton = {"Cadastrar"}
                    buttonStyle = "secondary"
                />
            </div>

        )
    })

return (
    <div>
        <AreaCard>
            {listTrip}
        </AreaCard>
        <ButtonBack
            h = {history}
            />     
        </div>
)
}

export default ListTripsPage
