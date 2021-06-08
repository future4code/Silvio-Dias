import React from 'react'
import Cards from '../components/Cards/Cards'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"




function AdminHomePage() {
    const history = useHistory()
    console.log(history)
    return (
        <div>
            <Cards
                typeList = "admin"
            />
            <Button text = "Cadastrar Viagem" action = {() => goTo(history,"/cadastro-viagem")}/>
            <Button/>   
            <Button text = "Logout"/>
            <Button/>  
            <Button text = "Voltar" action = {() => goToBack(history)}/>
            <Button/>  
        </div>

    )
}

export default AdminHomePage
