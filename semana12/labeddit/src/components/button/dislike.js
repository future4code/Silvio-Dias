import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import {ButtonVote} from "../button/style"

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

        if(props.voted < 0){
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
            <ButtonVote onClick = {() => getDislike(props.idPost)} >&#8595;</ButtonVote>
        </div>
    )
}

export default Dislike
