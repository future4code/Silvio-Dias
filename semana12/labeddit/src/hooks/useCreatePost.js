import {useState} from 'react'

function useCreatePost() {
    const [post,setPost] = useState("")

    const postSignup = (content) => {
        const body = {title: content.title,body: content.post}

        axios
        .post(`${BASE_URL}/posts`,body)
        .then((response) => {
            setPost(response.data) 
        })
        .catch((err) => {
            alert(err.message)
        })
    
        return [post,setPost]
    }
}

export default useCreatePost
