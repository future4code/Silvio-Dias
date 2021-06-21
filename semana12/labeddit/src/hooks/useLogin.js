import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../constants/url'

function useLogin(login) {
    const [token,setToken] = useState("")
    const body = {email: login.email,password: login.password}
    
    axios
    .post(`${BASE_URL}/users/login`)
    .then((response) => {
        setToken(response.date.token)
    })
}

export default useLogin
