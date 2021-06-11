import React, { useEffect,useState } from 'react'
import Cards from '../components/Cards/Cards'
import { useHistory } from "react-router-dom";
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import useTrips from '../hooks/useTrips';
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import axios from "axios"
import { BASE_URL, headers } from "../constants/url"
import loading from "../Image/loading.svg"
import { ButtonArea } from "./style"


function AdminHomePage() {
    const history = useHistory()
    const [deleted,setDeleted] = useState(false)

    useProtectedPage()

    const Trips = useTrips("/trips"
    ,"",[{}])

    const goToDetailPage = (id) => {
        history.push(`detalhes-de-viagem/${id}`);
    }

    const goToRegisterTrip = () => {
        history.push(`cadastro-viagem`);
    }

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

    if(Trips.length <= 1){
        return(
            <img src= {loading}></img> 
        )
    }
    
    return (
        <div>
            <ButtonArea directionFlex={true}>
                <Button text = "Logout"/>
                <Button action = {goToRegisterTrip} text = "Cadastrar Viagem"/>

                <ButtonBack
                h = {history}
                /> 
            </ButtonArea>
            {listTrips}
       
        </div>

    )
}

export default AdminHomePage
