import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function Like(props) {
    const {DeleteVote,setVoted} = useContext(GlobalStateContext)

    const getLike = (id) => {
        console.log(props.voted)
        if(props.voted > 0){
            DeleteVote(id)
        }else{
            const body = {direction: 1}
            axios
            .post(`${BASE_URL}/posts/${id}/votes`,body,headers)
            .then((response) => {
                setVoted(true)
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
