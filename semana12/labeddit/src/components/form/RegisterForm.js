import React from 'react'
import useForm from '../../hooks/useForm'

function RegisterForm() {
    const {form, onChange} = useForm([{}])
    return (
        <div>
            <form>
                <input name = "username" onChange = {onChange} type = "text" placeholder = "Username"/>
                <input name = "email" onChange =  {onChange} type = "email" placeholder = "E-mail"/>
                <input name = "password" onChange = {onChange} type = "password" placeholder = "Password"/>
            </form>
        </div>
    )
}

export default RegisterForm
