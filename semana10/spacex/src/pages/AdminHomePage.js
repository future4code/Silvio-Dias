import React, { useEffect,useState } from 'react'
import { useHistory } from "react-router-dom";
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import { ButtonArea } from "./style"
import AdminCard from '../components/Cards/adminCard';


function AdminHomePage() {
    const history = useHistory()

    useProtectedPage()

    const goToRegisterTrip = () => {
        history.push(`cadastro-viagem`);
    }
    
    const Logout = () => {
        localStorage.removeItem("token");
        history.push(`login`);


    }

    return (
        <div>
            <ButtonArea directionFlex={true}>
                <Button text = "Logout" action = {Logout}/>
                <Button action = {goToRegisterTrip} text = "Cadastrar Viagem"/>

                <ButtonBack
                h = {history}
                /> 
            </ButtonArea>
            <AdminCard/>
        </div>

    )
}

export default AdminHomePage
