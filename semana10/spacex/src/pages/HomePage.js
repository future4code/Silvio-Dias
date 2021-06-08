import React from 'react'
import Button from '../components/Buttons/Button';
import { useHistory } from "react-router-dom";
import { goTo } from '../routes/Cordinator';



function HomePage() {
    const history = useHistory()

    console.log(history)

    return (
        <div>
            <h1>Space X</h1>
            <Button text = "Viagens" action = {() => goTo(history,"/viagens")}/>
            <Button/>      
            <Button text = "Area de Administrador" action = {() => goTo(history,"/admin")}/>
            <Button/>                
            <Button text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default HomePage
