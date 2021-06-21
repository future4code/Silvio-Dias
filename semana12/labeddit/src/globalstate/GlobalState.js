import React, { useState } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {


return (
    <GlobalStateContext.Provider>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState