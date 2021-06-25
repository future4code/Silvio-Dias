import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { BASE_URL, headers } from '../constants/url'
import { GlobalStateContext } from '../globalstate/GlobalStateContext'

const PageNumber = () => {
    const [stop,setStop] = useState(false)
    const [number,setNumber] = useState(0)
    let paginationNumber = 0

    const {headers} =  useContext(GlobalStateContext)

    const checkPages = () => {
        if(headers.headers.Authorization){
            axios
            .get(`${BASE_URL}/posts?page=${paginationNumber}`,headers)
            .then((response) => {
                if(response.data.length){
                    paginationNumber++
                    checkPages()
                    setNumber(paginationNumber)
                }else{
                    setStop(true)
                }
    
            })
            .catch((err) => {
                alert(err.response.data)
            })
        }
    }


    useEffect(() => {
        checkPages()
    }, [headers.headers.Authorization])

    if(stop){
        paginationNumber = number
        return paginationNumber
    }


}

export default PageNumber
