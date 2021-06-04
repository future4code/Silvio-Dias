import axios from "axios"
import { useEffect, useState } from "react"
import { enterStudent } from "../api"
import { ImgMatch,MatchPage,MatchArea } from "./style"

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
                    <p>{match.name.length === 0 ?"Você ainda não tem nenhum match": match.name}</p> 
                </MatchArea>

        )
    })

    return(
        <MatchPage>
        {matchs.length === 0 ? "Você ainda não tem nenhum match":listMatch}
        </MatchPage>
        
    )
}

export default Matchs