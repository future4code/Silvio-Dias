import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function Dislike(props) {
    const {DeleteVote,setVoted} = useContext(GlobalStateContext)

    const getDislike = (id) => {
        
        const body = {direction: 1}
        let path = ""

        if(props.post){
            path = "posts"
        }else{
            path = "comments"
        }

        if(props.voted > 0){
            DeleteVote(id,path)
        }else{
            const body = {direction: -1}

            let path = ""

            if(props.post){
                path = "posts"
            }else{
                path = "comments"
            }


            axios
            .put(`${BASE_URL}/${path}/${id}/votes`,body,headers)
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
