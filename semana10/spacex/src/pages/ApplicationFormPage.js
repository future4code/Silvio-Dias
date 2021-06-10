import React from 'react'
import Input from '../components/Input/input'
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"


function ApplicationFormPage() {
    const history = useHistory()

    return (
        <div>
            <Input/>
            <ButtonBack
                h = {history}
            />        
        </div>
    )
}

export default ApplicationFormPage
