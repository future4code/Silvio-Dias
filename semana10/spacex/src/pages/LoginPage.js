import React, { useEffect } from 'react'
import axios from "axios"
import useInput from '../hooks/useInput'
import { useHistory } from "react-router-dom"
import { BASE_URL }  from "../constants/url"

import { ButtonBack}  from "../components/Buttons/ButtonBack"
import Button from "../components/Buttons/Button"


function LoginPage() {
    const history = useHistory()
    
    const [login, setLogin] = useInput('')
    const [senha,setSenha] = useInput('')
    
    const getLogin = () => {
        const body = {email:login,password:senha}
        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/admin");
        })
        .catch((err) => alert(err.response.data.message));
    }

    return (
        <div>
            <h1>Login</h1>
            <input  required placeholder = "E-mail" type = "email" onChange = {setLogin}/>
            <input  required placeholder = "Senha" type = "password" onChange = {setSenha}/>
            <Button text = "Login" action = {getLogin}/>
            <ButtonBack
                h = {history}
            /> 
            </div>
    )
}

export default LoginPage
