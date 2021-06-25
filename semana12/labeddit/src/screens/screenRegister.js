import React from 'react'
import RegisterForm from '../components/form/RegisterForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { FormCard, Titulo } from './style'

function ScreenRegister() {

    const register = (form) => {
        console.log(form)
         axios
        .post(`${BASE_URL}/users/signup`,form)
        .then((response) => {
        })
        .catch((err) => {
        })
    }
    return (
        <div>
            <Titulo class="titulo">Cadastro</Titulo>
            <FormCard>
                <RegisterForm
                register = {register}
                
                />
            </FormCard>

        </div>
    )
}

export default ScreenRegister
