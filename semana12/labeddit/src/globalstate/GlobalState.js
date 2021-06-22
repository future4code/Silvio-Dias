import React, { useState } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL } from '../constants/url'
import usePost from '../hooks/usePost'

const GlobalState = (props) => {

const posts = usePost()

console.log(posts)

return (
    <GlobalStateContext.Provider value = {{posts}}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState