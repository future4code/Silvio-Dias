import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL, headers } from '../constants/url'

const PageNumber = () => {
        let paginationNumber = 1

        const checkPages = () => {
            axios
            .get(`${BASE_URL}/posts?page=${paginationNumber}`,headers)
            .then((response) => {
                if(response.data.length){
                    paginationNumber++
                    checkPages()
                }

            })
            .catch((err) => {
                console.log(err)
            })
        }

        return paginationNumber

        useEffect(() => {
            checkPages()
        }, [])


}

export default PageNumber
