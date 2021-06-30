import React, { useContext } from 'react'
import LoginForm from '../components/form/LoginForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { useHistory } from "react-router-dom";
import {goTo} from "../router/Coordinator"
import { Titulo,FormCard,Link } from './style'
import { GlobalStateContext } from '../globalstate/GlobalStateContext';

function ScreenLogin(props) {

    const history = useHistory()
    const {setStart} = useContext(GlobalStateContext)
    const getLogin  = (form) => {
        axios
        .post(`${BASE_URL}/users/login`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            setStart(true)
            history.push('/')
            
        })
        .catch((err) => {
            console.log(err.response.data)
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
