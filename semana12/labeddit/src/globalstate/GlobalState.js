import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL,headers } from '../constants/url'
import { useHistory } from 'react-router-dom'


const GlobalState = (props) => {

const [page,setPage] = useState(0)
const [comments,setComments] = useState([{}])
const [voted,setVoted] = useState(false)
const [posts,setPosts] = useState([{}])
const [idPost,setIdPost] = useState([{}])
const [isPost,setIsPost] = useState("")
const [start,setStart] = useState(false)
const history = useHistory()


const headers = {headers: {Authorization:localStorage.getItem("token")}}



const getPost = () => {
    console.log(headers.headers.Authorization)
    if(headers.headers.Authorization){
        axios
        .get(`${BASE_URL}/posts?page=${page}`,headers)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((err) => {
            if(err.response.status === 401 && localStorage.getItem("token")){
                localStorage.removeItem("token")
                history.push("/login")
            }
                console.log("getPost")
                alert(err.response.data)

        })
    
    }
}

const getComments = () => {
    if(idPost.length > 1){
        axios
        .get(`${BASE_URL}/posts/${idPost}/comments`,headers)
        .then((response) => {
            setComments(response.data)
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
    getComments()
}, [voted,page,start])


return (
    <GlobalStateContext.Provider value = {{posts,isPost,idPost,headers,comments,setIdPost,DeleteVote,setVoted,getPost,getComments,setPage,setIsPost,setStart}}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState