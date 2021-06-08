import React from 'react'
import useTrips from '../../hooks/useTrips'

function Cards(props) {

        const Trips = useTrips("trips",
        "",
        [{}])


    const tripList = Trips && Trips.map((trip) => {
        if(props.typeList === "usuario"){
            return(
                <div>
                    <h2>{trip.name}</h2> 
                    <p>{trip.description}</p>
                    <p>{trip.planet}</p>
                    <p>{trip.durationInDays}</p>
                    <p>{trip.date}</p>
                    <button onClick = {trip.id}>Candidatar</button>
                
                </div>
            )
        }else if(props.typeList === "admin"){
            return(
                <div>
                    {trip.planet}
                    <button onClick = {trip.id}>Apagar</button>
                </div>
            )
        }
       
    })



return (
    <div>
        {tripList}
    </div>
)
}


export default Cards
