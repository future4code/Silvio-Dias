import React from 'react'
import Input from '../components/Input/input'
import { useHistory } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import useProtectedPage from "../hooks/useProtectedPage"



function CreateTripPage() {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <Input
            admin = {true}
            />
            <ButtonBack
                h = {history}
            />    
        </div>
    )
}

export default CreateTripPage
