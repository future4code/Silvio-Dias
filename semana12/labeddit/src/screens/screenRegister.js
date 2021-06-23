import React from 'react'
import RegisterForm from '../components/form/RegisterForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'

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
            <RegisterForm
            register = {register}
            
            />
        </div>
    )
}

export default ScreenRegister
