import React, { useEffect } from 'react'
import axios from "axios"
import useForm from '../hooks/useForm'
import { useHistory } from "react-router-dom"
import { BASE_URL }  from "../constants/url"
import { ButtonArea } from "./style"
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import Button from "../components/Buttons/Button"


function LoginPage() {
    const history = useHistory()

    if(localStorage.getItem("token")){
        history.push("/");
    }

    const { form, onChange } = useForm({email: "",password: ""})
    
    const getLogin = () => {
        axios
        .post(`${BASE_URL}/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/admin");
        })
        .catch((err) => alert(err.response.data.message));
        document.getElementById('form').reset()
    }

    return (
        <div>
            <h1>Login</h1>
            <form id = "form" onSubmit = {getLogin}>
                <input name = "email" required placeholder = "E-mail" type = "email" onChange = {onChange}/>
                <input name = "password" required placeholder = "Senha" type = "password" onChange = {onChange}/>
            </form>

            <ButtonArea>
                <Button typeButton = "submit" text = "Login" action = {getLogin}/>
                <ButtonBack
                    h = {history}
                /> 
            </ButtonArea>
            </div>
    )
}

export default LoginPage
