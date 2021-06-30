import React, { useContext } from 'react'
import PageNumber from '../../hooks/pageNumbers'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import {PageButton} from "./style"

function Pagination() {
    const {setPage} = useContext(GlobalStateContext)
    const numbers = PageNumber()
    const pageList = []
    if(numbers){
        for(let i = 1;i < numbers;i++){
            pageList.push(<PageButton onClick = {() => setPage(i)}>{i}</PageButton>)
            }
    }
    return(pageList)
}

export default Pagination
