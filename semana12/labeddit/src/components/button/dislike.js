import axios from 'axios'
import React from 'react'
import { BASE_URL, headers } from '../../constants/url'

function Dislike(props) {

    const getDislike = (id) => {
        console.log(headers)
        const body = {direction: -1}
        axios
        .put(`${BASE_URL}/posts/${id}/votes`,body,headers)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div>
            <button onClick = {() => getDislike(props.idPost)} >Descurtir</button>
        </div>
    )
}

export default Dislike
