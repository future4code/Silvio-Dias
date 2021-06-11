import React from 'react'
import Form from '../components/Input/form'
import { useHistory,useParams } from "react-router-dom";
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import { ButtonArea } from "./style"


function ApplicationFormPage() {
    const history = useHistory()
    const params = useParams()


    return (
        <div>
            <Form
            id = {params.id}
            />
            <ButtonArea>
                <ButtonBack
                    h = {history}
                />     
            </ButtonArea>
   
        </div>
    )
}

export default ApplicationFormPage
