import React from 'react'
import axios from "axios"
import useInput from '../hooks/useInput'
import { useHistory } from "react-router-dom";
import { goTo,goToBack } from '../routes/Cordinator';
import { BASE_URL }  from "../constants/url"

import Button from "../components/Buttons/Button"




function LoginPage() {
    const history = useHistory()
    
    const [login, setLogin] = useInput('')
    const [senha,setSenha] = useInput('')
    
    const getLogin = () => {
        const body = {email:login,password:senha}
        axios
        .post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/detalhes-de-viagem");
        })
        .catch((err) => alert(err.response.data.message));
        
    }


    return (
        <div>
            <h1>Login</h1>
            <input  required placeholder = "E-mail" type = "email" onChange = {setLogin}/>
            <input  required placeholder = "Senha" type = "password" onChange = {setSenha}/>
            <Button text = "Login" action = {getLogin}/>
            <Button customStyle = "secondary" text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default LoginPage
