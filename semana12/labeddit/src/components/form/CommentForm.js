import React from 'react'
import useForm from '../../hooks/useForm'
import {Input} from "./styled"

function CommentForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <Input onChange = {onChange} type = "text" name = "body" placeholder = "Faça um comentário" />
            <button onClick = {() => props.comentar(form)} >Comentar</button>
        </div>
    )
}

export default CommentForm
