import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL,headers } from '../constants/url'


const GlobalState = (props) => {

const [voted,setVoted] = useState(false)
const [posts,setPosts] = useState([{}])
const [idPost,setIdPost] = useState([{}])

const getPost = () => {
    axios
    .get(`${BASE_URL}/posts`,headers)
    .then((response) => {
        setPosts(response.data)
        console.log(response.data)
    })
    .catch((err) => {
        alert(err.message)
    })
}


const DeleteVote = (id,path)  => {
    alert('deletando')
    axios
    .delete(`${BASE_URL}/${path}/${id}/votes`,headers)
    .then((response) => {
        setVoted(!voted)
    })
    .catch((err) => {
        alert(err.message)
    })
}


useEffect(() => {
    setVoted(false)
    getPost()
}, [voted])


return (
    <GlobalStateContext.Provider value = {{posts,idPost,setIdPost,DeleteVote,setVoted,getPost}}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState