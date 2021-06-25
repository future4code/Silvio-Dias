import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL, headers } from '../../constants/url'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import {ButtonVote} from "../button/style"

function Like(props) {
    const {DeleteVote,setVoted} = useContext(GlobalStateContext)

    const getLike = (id) => {

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
            <ButtonVote onClick = {() => getLike(props.idPost)} > &#8593; </ButtonVote>
        </div>
    )
}

export default Like
