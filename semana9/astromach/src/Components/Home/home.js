import Card from "../Card/card"
import Matchs from "../Matchs/matchs"

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
        default:
            return (
                <Card/>
            )
    }
}

export default Home