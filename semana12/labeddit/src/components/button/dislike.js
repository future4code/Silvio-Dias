import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function Dislike(props) {
    const {DeleteVote,setVoted} = useContext(GlobalStateContext)

    const getDislike = (id) => {
        
        if(props.voted < 0 ){
            DeleteVote(id)
        }else{
            const body = {direction: -1}
            axios
            .put(`${BASE_URL}/posts/${id}/votes`,body,headers)
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
            <button onClick = {() => getDislike(props.idPost)} >Descurtir</button>
        </div>
    )
}

export default Dislike
