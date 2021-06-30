import React from 'react'
import useForm from '../../hooks/useForm'
import ButtonForm from '../button/button'
import {Input} from "./styled"

function CommentForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <Input onChange = {onChange} type = "text" name = "body" placeholder = "Faça um comentário" />
            <ButtonForm
            button = {() => props.comentar(form)}
            text = "Comentar"
            />
        </div>
    )
}

export default CommentForm
