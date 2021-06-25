import React from 'react'
import useForm from '../../hooks/useForm'
import {Input} from "./styled"
import ButtonForm from '../button/button'

function PostForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <form>
                <Input onChange = {onChange} name = "title" placeholder = "Titulo do Post" type = "text"/>
                <Input onChange = {onChange} name = "body" placeholder = "Diga o que está pensando" type = "text"/>
            </form>
            <ButtonForm
            button = {() => props.post(form)}
            text = "Post"
            />
            </div>
    )


}

export default PostForm
