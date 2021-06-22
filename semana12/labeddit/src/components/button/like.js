import axios from 'axios'
import React from 'react'
import { BASE_URL, headers } from '../../constants/url'

function Like(props) {

    const getLike = (id) => {
        const body = {direction: 1}
        axios
        .post(`${BASE_URL}/posts/${id}/votes`,body,headers)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div>
            <button onClick = {() => getLike(props.idPost)} >Curtir</button>
        </div>
    )
}

export default Like
