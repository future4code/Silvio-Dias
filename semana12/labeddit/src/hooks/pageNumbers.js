import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL, headers } from '../constants/url'

const PageNumber = () => {
    const [stop,setStop] = useState(false)
    const [number,setNumber] = useState(0)
    let paginationNumber = 0

    const checkPages = () => {
        axios
        .get(`${BASE_URL}/posts?page=${paginationNumber}`,headers)
        .then((response) => {
            if(response.data.length){
                paginationNumber++
                checkPages()
                console.log(paginationNumber)
                setNumber(paginationNumber)
            }else{
                setStop(true)

            }

        })
        .catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        checkPages()
    }, [])

    if(stop){
        paginationNumber = number
        return paginationNumber
    }


}

export default PageNumber
