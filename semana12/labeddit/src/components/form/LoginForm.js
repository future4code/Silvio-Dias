import React from 'react'
import useForm from '../../hooks/useForm'
import {Input,FormLog} from "./styled"
import ButtonForm from '../button/button'


function LoginForm(props) {
    const {form, onChange} = useForm([])

    return (
        <div>
            <FormLog>
                <Input name = "email" onChange = { onChange } type = "email" placeholder = "E-mail"/>
                <Input name = "password" onChange = { onChange } type = "password" placeholder = "Password"/>
            </FormLog>
            <ButtonForm
            button = {() => props.login(form)}
            text = "Login"
            />
        </div>
    )
}

export default LoginForm
