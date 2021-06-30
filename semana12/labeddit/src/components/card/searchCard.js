import React from 'react'
import { CardArea, CardPost } from './style'

function SearchCard({post}) {
const {username,title,body} = post

    return (
        <CardPost>
            <CardArea>
                <h3>{title}</h3>
                <p>{body}</p>
                <p>{username}</p>
            </CardArea>
        </CardPost>

    )
}

export default SearchCard
