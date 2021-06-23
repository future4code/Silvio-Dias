import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function Like(props) {
    const {DeleteVote,setVoted} = useContext(GlobalStateContext)

    const getLike = (id) => {
        if(props.voted > 0){
            DeleteVote(id)
        }else{
            const body = {direction: 1}
            let path = ""

            if(props.post){
                path = "posts"
            }else{
                path = "comments"
            }

            axios
            .post(`${BASE_URL}/${path}/${id}/votes`,body,headers)
            .then((response) => {
                setVoted(true)
                console.log(response)
            })
            .catch((err) => {
                alert(err.message)
            }) 
        }
    }

    return (
        <div>
            <button onClick = {() => getLike(props.idPost)} >Curtir</button>
        </div>
    )
}

export default Like
