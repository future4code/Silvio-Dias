import React from 'react'
import { CardPost } from './style'

function SearchCard({post}) {
const {username,title,body} = post

    return (
        <CardPost>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>{username}</p>
        </CardPost>
    )
}

export default SearchCard
