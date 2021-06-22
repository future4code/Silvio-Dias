import React from 'react'
import LoginForm from '../components/form/LoginForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'

function ScreenLogin(props) {

    const getLogin  = (form) => {
        console.log(form)
        axios
        .post(`${BASE_URL}/users/login`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm
            login = {getLogin}
            />
        </div>
    )
}

export default ScreenLogin
