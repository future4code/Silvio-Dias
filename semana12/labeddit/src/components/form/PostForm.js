import React from 'react'
import useForm from '../../hooks/useForm'

function PostForm(props) {
    const {form, onChange} = useForm([])
    return (
        <div>
            <form>
                <input onChange = {onChange} name = "title" placeholder = "Titulo do Post" type = "text"/>
                <input onChange = {onChange} name = "body" placeholder = "Diga o que está pensando" type = "text"/>
            </form>
            <button onClick = {() => props.post(form)}>Publicar Post</button>
            </div>
    )


}

export default PostForm
