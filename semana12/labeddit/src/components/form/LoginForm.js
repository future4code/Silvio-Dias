import React from 'react'
import useForm from '../../hooks/useForm'


function LoginForm(props) {
    const {form, onChange} = useForm([])

    return (
        <div>
            <form>
                <input name = "email" onChange = { onChange } type = "email" placeholder = "E-mail"/>
                <input name = "password" onChange = { onChange } type = "password" placeholder = "Password"/>
            </form>
            <button onClick = {() => props.login(form)} type = "submit">Login</button>
        </div>
    )
}

export default LoginForm
