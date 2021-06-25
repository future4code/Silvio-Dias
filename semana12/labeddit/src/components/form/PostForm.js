import React from 'react'
import useForm from '../../hooks/useForm'
import {Input,FormPost} from "./styled"
import ButtonForm from '../button/button'

function PostForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <FormPost>
                <Input titlePost onChange = {onChange} name = "title" placeholder = "Titulo do Post" type = "text"/>
                <Input contentPost onChange = {onChange} name = "body" placeholder = "Diga o que está pensando" type = "text"/>
            </FormPost>
            <ButtonForm
            button = {() => props.post(form)}
            text = "Post"
            />
            </div>
    )


}

export default PostForm
