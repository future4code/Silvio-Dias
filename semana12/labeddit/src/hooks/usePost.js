import { useEffect, useState } from 'react'
import { BASE_URL,headers } from '../constants/url'
import axios from "axios"

function usePost() {
    const [posts,setPosts] = useState()

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

    useEffect(() => {
        getPost()
    }, [])

    return posts
}

export default usePost
