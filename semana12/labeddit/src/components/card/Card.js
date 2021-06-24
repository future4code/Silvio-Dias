import React from 'react'
import { useHistory } from 'react-router-dom'
import { CardPost,CardTitulo } from './style'
import "./style.scss"

function Card({ post },props) {
    const {id,title,body,
            commentCount,voteSum,userVote,
            username} = post

    const history = useHistory()
    return (
        <CardPost key = {id}>
            <div>
                <CardTitulo class="vhs" data-text= {title} >{title}</CardTitulo>
            </div>
            <div>
                <p>{body}</p>
            </div>
            <div>
                <h3>{username}</h3>
            </div>

            <div>
                {commentCount && (<p>Comentários: {commentCount}</p>)}
                {voteSum && (<p>Avalialão: {voteSum}</p>)} 
            </div>

        </CardPost>
    )
}

export default Card
