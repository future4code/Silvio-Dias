import React, { useEffect, useState} from 'react'
import PageNumber from '../../hooks/pageNumbers'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/url'
import SearchCard from '../card/searchCard'
import {Input} from "./styled"

function SearchForm() {
    const [posts,setPosts] = useState([{}])
    const [searched,setSearched] = useState([{}])
    const numbers = PageNumber()

    const getAll = () => {
            axios
            .get(`${BASE_URL}/posts?size=${numbers *10}`,headers)
            .then((response) => {
                setPosts(response.data)
                console.log("foi")
            })
            .catch((err) => {
                alert(err)
            })
        }
    
    const searchPost = (event) => {
        const search = event.target.value
        const postSearched = posts.title && posts.filter(el => el.title.toLowerCase() === search.toLowerCase() ||
                                                el.username.toLowerCase() === search.toLowerCase() ||
                                                el.body.toLowerCase() === search.toLowerCase())
        setSearched(postSearched)

    }

    const listSearched = searched.length && searched.map((post) => {
        return(
            <SearchCard
            post = {post}
            />
        )
    })

    useEffect(() => {
            getAll()
    },[numbers])

    if(posts.length > 1){
        return(
            <div>
                <Input onChange = {searchPost} placeholder = "Pesquisar" />
                {listSearched.length  && listSearched}
            </div>

        )
    }
    
    return (
        <p>Carregando...</p>
    )
}

export default SearchForm
