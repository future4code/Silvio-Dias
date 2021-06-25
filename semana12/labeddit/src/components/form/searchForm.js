import React, { useEffect, useState} from 'react'
import PageNumber from '../../hooks/pageNumbers'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/url'
import SearchCard from '../card/searchCard'
import {Input} from "./styled"

function SearchForm() {
    const [posts,setPosts] = useState([{}])
    const [word,setWord] = useState("")
    const [searched,setSearched] = useState([{}])
    const numbers = PageNumber()

    const getAll = () => {
            axios
            .get(`${BASE_URL}/posts?size=${numbers *10}`,headers)
            .then((response) => {
                console.log("dentro do axios")
                setPosts(response.data)
                if(posts.length > 1){
                    console.log("post.length")
                    searchPost()
                }

            })
            .catch((err) => {
                    alert(err)
            })
        }
    
    const searchPost = () => {
        console.log(posts)
        const postSearched = posts.title && posts.filter(el => el.title.toLowerCase() === word.toLowerCase() ||
                                                el.username.toLowerCase() === word.toLowerCase() ||
                                                el.body.toLowerCase() === word.toLowerCase())

        setSearched(postSearched)

    }

    const getSearch = (event) => {
        setWord(event.target.value)
    }

    const listSearched = searched.length && searched.map((post) => {
        return(
            <SearchCard
            post = {post}
            />
        )
    })    

    useEffect(() => {
        if(posts.title){
            searchPost()
        }
    }, [posts])
    return (
        <div>
            <Input onChange = {getSearch} placeholder = "Pesquisar" />
            <button onClick = {getAll}>&#128269;</button>
        </div>
    )
}

export default SearchForm
