import React from 'react'
import Cards from '../Cards/Cards'
import useTrips from '../../hooks/useTrips';
import useDelete from '../../hooks/useDelete';
import useGoTo from '../../hooks/useGoTo';
import { loadingPage } from '../../scripts/loading';


function AdminCard() {
    const deleteTrip = useDelete() 
    const {goToPage} = useGoTo()

    const Trips = useTrips("/trips"
    ,"",[{}])


    const listTrips = Trips.map((trip) => {
        return(
            <Cards
                customStyle = "admin"
                name = {<a onClick = {() => goToPage(`detalhes-de-viagem`,trip.id)}>{trip.name}</a>}
                textButton = "Apagar"
                buttonStyle = "secondary"
                actionButton = {() => deleteTrip(trip.id)}
            />
        )
    })

    return (
        <div>
            {Trips.length <= 1? loadingPage():listTrips }
        </div>
    )
}

export default AdminCard
