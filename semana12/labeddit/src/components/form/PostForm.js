import React from 'react'
import useForm from '../../hooks/useForm'
import {Input} from "./styled"

function PostForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <form>
                <Input onChange = {onChange} name = "title" placeholder = "Titulo do Post" type = "text"/>
                <Input onChange = {onChange} name = "body" placeholder = "Diga o que está pensando" type = "text"/>
            </form>
            <button onClick = {() => props.post(form)}>Publicar Post</button>
            </div>
    )


}

export default PostForm
