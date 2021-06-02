import axios from "axios"
import { useEffect, useState } from "react"
import { enterStudent } from "../api"

const Matchs = () => {

    const [matchs,setMatchs] = useState([])
    
    let stop = ""

    useEffect(() =>{
        getMatch()
        console.log(matchs)
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
            <div>
                <img src = {match.photo}/>
                <p>{match.name}</p> 
            </div>

        )
    })

    return(
        <div>
        {listMatch}
        </div>
        
    )
}

export default Matchs