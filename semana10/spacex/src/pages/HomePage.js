import React from 'react'
import Button from '../components/Buttons/Button';
import { useHistory } from "react-router-dom";
import { goTo } from '../routes/Cordinator';
import { ButtonArea,HomeArea } from './style'



function HomePage() {
    const history = useHistory()

    return (
        <HomeArea>
            <h1>SpaceX</h1>
            <ButtonArea directionFlex>
                <Button  text = "Viagens" action = {() => goTo(history,"/viagens")}/> 
                <Button  text = "Admin" action = {() => goTo(history, localStorage.getItem("token") ? "/admin":"/login")}/>    
            </ButtonArea>
        
        </HomeArea>
    )
}

export default HomePage
