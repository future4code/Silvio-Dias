import React from 'react'
import Input from '../components/Input/input'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import Button from "../components/Buttons/Button"

function ApplicationFormPage() {
    const history = useHistory()

    return (
        <div>
            <Input/>
            <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default ApplicationFormPage
