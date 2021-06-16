import React from 'react'
import Form from '../components/Input/form'
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"
import { ButtonArea } from "./style"

function CreateTripPage() {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <Form
            admin = {true}
            />
            <ButtonArea>
                <ButtonBack
                    h = {history}
                />    
            </ButtonArea>
        </div>
    )
}

export default CreateTripPage
