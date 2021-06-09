import React from 'react'
import Cards from '../components/Cards/Cards'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import useTrips from '../hooks/useTrips';




function AdminHomePage() {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <Cards
                typeList = "admin"
            />

            <Button text = "Cadastrar Viagem" action = {() => goTo(history,"/cadastro-viagem")}/>
            <Button text = "Logout"/>
            <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
        </div>

    )
}

export default AdminHomePage
