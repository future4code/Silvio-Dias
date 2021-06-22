import React from 'react'
import useForm from '../../hooks/useForm'

function RegisterForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <form>
                <input name = "username" onChange = {onChange} type = "text" placeholder = "Username"/>
                <input name = "email" onChange =  {onChange} type = "email" placeholder = "E-mail"/>
                <input name = "password" onChange = {onChange} type = "password" placeholder = "Password"/>
            </form>
            <button onClick = {() => props.register(form)} >Cadastrar</button>
        </div>
    )
}

export default RegisterForm
