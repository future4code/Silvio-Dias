import React from 'react'
import useTrips from '../../hooks/useTrips'


function Cards() {
    const Trips = useTrips("trips",
        "",
        [{}])


    const teste = () => {
        console.log(Trips)
    }

    const tripList = Trips && Trips.map((trip) => {
        return(
            <p>{trip.planet}</p>
        )
    })
    return (
        <div>
            {Trips ? tripList: "Carregando"}6
        </div>
    )
}

export default Cards
