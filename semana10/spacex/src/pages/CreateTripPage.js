import React from 'react'
import Input from '../components/Input/input'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"



function CreateTripPage() {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <Input
            admin = {true}
            />
            <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default CreateTripPage
