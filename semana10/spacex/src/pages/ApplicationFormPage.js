import React from 'react'
import Form from '../components/Input/form'
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"


function ApplicationFormPage() {
    const history = useHistory()
    const params = useParams()


    return (
        <div>
            <Form
            id = {params.id}
            />
            <ButtonBack
                h = {history}
            />        
        </div>
    )
}

export default ApplicationFormPage
