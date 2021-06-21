import React from 'react'
import useForm from '../../hooks/useForm'
import useLogin from '../../hooks/useLogin'

function LoginForm() {
    const {form, onChange} = useForm([])

    const login = useLogin()

    return (
        <div>
            <form action = {() => login(form)}>
                <input name = "email" onChange = {onChange} type = "email" placeholder = "E-mail"/>
                <input name = "password" onChange = {onChange} type = "password" placeholder = "Password"/>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
