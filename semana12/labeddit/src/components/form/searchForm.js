import React, {useContext, useState} from 'react'
import PageNumber from '../../hooks/pageNumbers'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/url'

function SearchForm() {
    const [posts,setPosts] = useState([{}])
    const [searched,setSearched] = useState([{}])
    const {setPage} = useContext(GlobalStateContext)
    const numbers = PageNumber()

    const getAll = () => {
        if(numbers){
            axios.
            get(`${BASE_URL}/posts?size=${numbers *10}`,headers)
            .then((response) => {
                setPosts(response.data)
            })
            .catch((err) => {
                alert(err)
            })
        }
    }
    
    const searchPost = (event) => {
        const search = event.target.value
        const postSearched = posts.filter(el => el.title === search || el.username === search || el.body === search)
        setSearched(postSearched)

    }
    
    return (
        <div>
            <input onChange = {searchPost} onBlur = {() => setPosts([{}])} onClick = {getAll} placeholder = "Pesquisar" />
        </div>
    )
}

export default SearchForm
