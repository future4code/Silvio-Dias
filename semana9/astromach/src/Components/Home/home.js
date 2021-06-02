import Card from "../Card/card"
import Matchs from "../Matchs/matchs"
import styled from "styled-components"




const Home = (props) =>{

    switch(props.pagination){
        case "Card":
            return(
                <Card/>
            )

        case "Match":
            return (
                <Matchs/>
            )

    }

    return(
        <div>
        </div>
    )
}

export default Home