import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL,headers } from '../constants/url'


const GlobalState = (props) => {

const [comments,setComments] = useState([{}])
const [voted,setVoted] = useState(false)
const [posts,setPosts] = useState([{}])
const [idPost,setIdPost] = useState([{}])
const token = localStorage.getItem("token");


const getPost = () => {
    if(token){
        
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
}

const getComments = () => {
    if(idPost.length > 1){
        axios
        .get(`${BASE_URL}/posts/${idPost}/comments`,headers)
        .then((response) => {
            setComments(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
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
    <GlobalStateContext.Provider value = {{posts,idPost,comments,setIdPost,DeleteVote,setVoted,getPost,getComments}}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState