import React from 'react'
import LoginForm from '../components/form/LoginForm'
import useForm from '../hooks/useForm'

function ScreenLogin() {
    const {form} = useForm()

    console.log(form)
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}

export default ScreenLogin
