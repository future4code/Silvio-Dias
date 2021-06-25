import React from 'react'
import LoginForm from '../components/form/LoginForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { useHistory } from "react-router-dom";
import {goTo} from "../router/Coordinator"
import { Titulo,FormCard,Link } from './style'

function ScreenLogin(props) {

    const history = useHistory()

    const getLogin  = (form) => {
        axios
        .post(`${BASE_URL}/users/login`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push('/')
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <div>
            <Titulo>Login</Titulo>
            <FormCard>
                <LoginForm
                login = {getLogin}
                />
                <Link onClick = {() => goTo(history,"/register")}>Não tem cadastro? Clique aqui</Link>
            </FormCard>
        </div>
    )
}

export default ScreenLogin
