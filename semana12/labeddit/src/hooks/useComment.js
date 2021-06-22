import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../constants/url'

function useComment() {
const [comments,setComments] = useState([{}])

const getComments = (id) =>{
    axios
    .get(`${BASE_URL}/posts/${id}/comments`)
    .then((response) => {
        setComments(response.data)
    })
    .catch((err) => {
        alert(err.message)
    })
}

return [comments,getComments]
   
}

export default useComment
