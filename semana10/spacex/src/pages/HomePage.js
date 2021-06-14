import React from 'react'
import Button from '../components/Buttons/Button';
import useGoTo from '../hooks/useGoTo';
import { ButtonArea,HomeArea } from './style'

function HomePage() {
    const {goToPage} = useGoTo()

    return (
        <HomeArea>
            <h1>LabeX</h1>
            <ButtonArea directionFlex>
                <Button  text = "Viagens" action = {() => goToPage("viagens")}/> 
                <Button  text = "Admin" action = {() => goToPage(localStorage.getItem("token") ? "/admin":"/login")}/>    
            </ButtonArea>
        
        </HomeArea>
    )
}

export default HomePage
