import axios from "axios"
import { useEffect, useState } from "react"
import { enterStudent } from "../api"
import styled from 'styled-components'



const ImgMatch = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
`

const MatchPage = styled.div`
    height: 90%;
    width: 100%;
`

const MatchArea = styled.div`
    display:flex;
    margin-bottom: 1rem;
    padding: 0.3rem;

    &:hover{
        background-color:red
    }
`

const Matchs = () => {

    const [matchs,setMatchs] = useState([])

    const stop = ""

    useEffect(() =>{
        getMatch()
    }, [stop])

    const createList = (response) => {
        setMatchs(response)
        console.log(response)
    }

    const getMatch = () => {
        axios
        .get(enterStudent() + "matches")
        .then((response) =>{
            createList(response.data.matches)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const listMatch = matchs.map((match) => {
        return(
                <MatchArea>
                    <ImgMatch style={{ backgroundImage: `url(${match.photo})` }}> </ImgMatch>
                    <p>{match.name}</p> 
                </MatchArea>

        )
    })

    return(
        <MatchPage>
        {listMatch}
        </MatchPage>
        
    )
}

export default Matchs