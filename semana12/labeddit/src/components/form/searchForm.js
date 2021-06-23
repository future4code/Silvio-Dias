import React, {useContext} from 'react'
import PageNumber from '../../hooks/pageNumbers'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/url'

function SearchForm() {
    const {setPage} = useContext(GlobalStateContext)
    const numbers = PageNumber()

    const getAll = () => {
        if(numbers){
            axios.
            get(`${BASE_URL}/posts?size=${numbers *10}`,headers)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                alert(err)
            })
        }
    }
    
    return (
        <div>
            <input onFocus = {getAll} placeholder = "Pesquisar" />
        </div>
    )
}

export default SearchForm
