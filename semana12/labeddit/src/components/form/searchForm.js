import React, {useContext, useState} from 'react'
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

    console.log(searched)

    const listSearched = searched.length && searched.map((post) => {
        return(
            <SearchCard
            post = {post}
            />
        )
    })
    
    return (
        <div>
            <Input onChange = {searchPost} onBlur = {() => setPosts([{}])} onClick = {getAll} placeholder = "Pesquisar" />
            {listSearched.length && listSearched}
        </div>
    )
}

export default SearchForm
