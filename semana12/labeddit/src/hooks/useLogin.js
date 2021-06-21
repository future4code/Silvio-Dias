import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../constants/url'

const useLogin = (login) =>  {    
   const getLogin  = () => {

    console.log(login)
    
    axios
    .post(`${BASE_URL}/users/login`)
    .then((response) => {

    })
    .catch(() => {
        
    })
}
   }


export default useLogin
