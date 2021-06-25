import React from 'react'
import RegisterForm from '../components/form/RegisterForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { FormCard, Titulo } from './style'
import { useHistory } from 'react-router-dom'

function ScreenRegister() {

    const history = useHistory()

    const register = (form) => {
         axios
        .post(`${BASE_URL}/users/signup`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push("/")
        })
        .catch((err) => {
            alert(err.response.data)
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
