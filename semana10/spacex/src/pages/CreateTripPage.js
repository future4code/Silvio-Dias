import React from 'react'
import Form from '../components/Input/form'
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"

function CreateTripPage() {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <Form
            admin = {true}
            />
            <ButtonBack
                h = {history}
            />    
        </div>
    )
}

export default CreateTripPage
