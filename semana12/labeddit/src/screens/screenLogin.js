import React from 'react'
import LoginForm from '../components/form/LoginForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { useHistory } from "react-router-dom";
import {goTo} from "../router/Coordinator"

function ScreenLogin(props) {

    const history = useHistory()



    const getLogin  = (form) => {
        console.log(form)
        axios
        .post(`${BASE_URL}/users/login`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push('/')
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
            <h3 onClick = {() => goTo(history,"/register")}>Não tem cadastro? Cadastre-se aqui</h3>
        </div>
    )
}

export default ScreenLogin
