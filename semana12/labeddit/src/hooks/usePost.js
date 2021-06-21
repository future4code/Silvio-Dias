import { useState } from 'react'
import { BASE_URL } from '../constants/url'

function usePost() {
    const [posts,setPosts] = useState()

    const getPost = () => {
        axios
        .get(`${BASE_URL}/posts`,token)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return posts
}

export default usePost
