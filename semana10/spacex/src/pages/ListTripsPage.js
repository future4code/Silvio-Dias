import React from 'react'
import Cards from "../components/Cards/Cards"
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useTrips from "../hooks/useTrips"
import { AreaCard,ButtonArea } from './style';
import loading from "../Image/loading.svg"

function ListTripsPage(props) {
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

    if(Trips.length <= 1){
        return(
            <img src= {loading}></img> 
        )
    }

return (
    <div>
        <AreaCard>
            {listTrip}
        </AreaCard>
        <ButtonArea>
            <ButtonBack
                h = {history}
                />   
        </ButtonArea>
  
        </div>
)
}

export default ListTripsPage
