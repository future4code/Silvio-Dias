import React from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
const teste = true


return (
    <GlobalStateContext.Provider>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState