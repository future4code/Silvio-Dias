import React from 'react'
import useForm from '../../hooks/useForm'
import {Input} from "./styled"

function RegisterForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <form>
                <Input name = "username" onChange = {onChange} type = "text" placeholder = "Username"/>
                <Input name = "email" onChange =  {onChange} type = "email" placeholder = "E-mail"/>
                <Input name = "password" onChange = {onChange} type = "password" placeholder = "Password"/>
            </form>
            <button onClick = {() => props.register(form)} >Cadastrar</button>
        </div>
    )
}

export default RegisterForm
