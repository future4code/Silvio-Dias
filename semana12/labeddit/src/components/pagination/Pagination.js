import React, { useContext } from 'react'
import PageNumber from '../../hooks/pageNumbers'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function Pagination() {
    const {setPage} = useContext(GlobalStateContext)
    const numbers = PageNumber()
    const pageList = []
    if(numbers){
        for(let i = 1;i < numbers;i++){
            pageList.push(<button onClick = {() => setPage(i)}>{i}</button>)
            }
    }
    return(pageList)
}

export default Pagination
