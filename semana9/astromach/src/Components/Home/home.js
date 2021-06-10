import Card from "../Card/card"
import Matchs from "../Matchs/matchs"
import { useEffect } from 'react'

const Home = (props) =>{

    const stop = "";

    useEffect(() => {
        alert("Arraste para direita para curtir e esquerda para negar")
    },[stop])

    switch(props.pagination){
        case "Card":
            return(
                <Card/>
            )

        case "Match":
            return (
                <Matchs/>
            )
        default:
            return (
                <Card/>
            )
    }
}

export default Home