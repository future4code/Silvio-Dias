import React from 'react'
import Cards from '../Cards/Cards'
import useTrips from '../../hooks/useTrips';
import axios from "axios"
import { BASE_URL, headers } from "../../constants/url"
import { useHistory } from "react-router-dom";
import loading from "../../Image/loading.svg"


function AdminCard() {
    const history = useHistory()

    const goToDetailPage = (id) => {
        history.push(`detalhes-de-viagem/${id}`);
    }

    const Trips = useTrips("/trips"
    ,"",[{}])

    const deleteTrip = (id) => {
        const checkDelete = window.confirm("Tem certeza que quer deletar?")
        if(checkDelete){
            axios
        .delete(`${BASE_URL}/trips/${id}`,headers)
        .then((response) => {
            history.push(`admin`);
        })
        .catch((err) => {
            console.log(err)
        })
        }
        
    }

    console.log(Trips)
    const listTrips = Trips.map((trip) => {
        return(
            <Cards
                customStyle = "admin"
                name = {<a onClick = {() => goToDetailPage(trip.id)}>{trip.name}</a>}
                textButton = "Apagar"
                buttonStyle = "secondary"
                actionButton = {() => deleteTrip(trip.id)}
            />
        )
    })

    console.log(listTrips)

    if(Trips.length <= 1){
        return(
            <img src= {loading}></img> 
        )
    }

    return (
        <div>
           {listTrips}
        </div>
    )
}

export default AdminCard
