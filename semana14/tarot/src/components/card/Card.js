import React, {  useState } from 'react'
import {CardFront,CardBack,FlipCard,InnerCard,TarotImg,TarotBack} from "./style"
import "./style.css"

function Card({card,base,action,checkStart}) {
    const {image,name} = card
    const {imagesUrl,imageBackCard} = base
    const [turnCard,setTurnCard] = useState(false)

    function sendCard(){
        const sendOnTime = setTimeout(action,700,name,image)
    }

    return (
        <FlipCard onClick = {checkStart && sendCard} class = {checkStart && "inTarot"}>
            <InnerCard onClick = {() => setTurnCard(checkStart && true)} class = {checkStart && turnCard && "turn"}>
                <CardFront >
                    <TarotImg src = {imagesUrl + image}/>
                </CardFront>

                <CardBack >
                    <TarotBack src = {imageBackCard}/>
                </CardBack>

            </InnerCard>
        </FlipCard>

    )
}

export default Card
