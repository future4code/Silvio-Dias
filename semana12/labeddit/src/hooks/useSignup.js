import {useState} from 'react'
import { BASE_URL } from '../constants/url'

function useSignup() {
    const [token,setToken] = useState("")

    const postSignup = (signup) => {
        const body = {
            username: signup.user,
            email: signup.email,
            password: signup.password
        }

        axios
        .post(`${BASE_URL}/users/signup`,body)
        .then((response) => {
            setToken(response.data.token) 
        })
        .catch((err) => {
            alert(err.message)
        })
    
        return token
    }
}

export default useSignup
