import React from 'react'
import useForm from '../../hooks/useForm'
import {Input} from "./styled"


function LoginForm(props) {
    const {form, onChange} = useForm([])

    return (
        <div>
            <form>
                <Input name = "email" onChange = { onChange } type = "email" placeholder = "E-mail"/>
                <Input name = "password" onChange = { onChange } type = "password" placeholder = "Password"/>
            </form>
            <button onClick = {() => props.login(form)} type = "submit">Login</button>
        </div>
    )
}

export default LoginForm
