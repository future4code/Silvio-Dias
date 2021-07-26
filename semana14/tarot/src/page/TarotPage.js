import React, { useEffect, useState } from 'react'
import useTarot from '../hooks/useTarot'
import Card from "../components/card/Card"
import {TarotDisplay,BodyTarot} from "./style"
import Modal from "../components/Modal/Modal"
import Header from '../components/Header/Header'
import {randomNumber} from "../script/RandomNumber"

function TarotPage() {
    const {tarot,getTarot} = useTarot()

    const [randomTarot,setRandomTarot] = useState([])
    const [choosedCart,setChoosedCart] = useState([])
    const [startTarot,setStartTarot] = useState(false)

    useEffect(() => {
        getTarot()
    }, [])

    function getChoosedCards(name,image){ //Recebe carta escolhida 
        const choosed = {name,image}
        setChoosedCart([choosed])

    }


    const tarotList = tarot.cards && tarot.cards.map((card) => {
        return( 
            <Card
            card = {card}
            base = {tarot}
            />
        )
    })

    const makeRandomTarot = () => { //Cria lista de cartas random
        const tarotRandomList = []
        const verifyNumber = []
        let i = 0;

        while( i < tarot.cards.length){
            const number = randomNumber(tarotList)

            if(!verifyNumber.find(n => n === number)){
                tarotRandomList.push(tarot.cards[number])
                verifyNumber.push(number)
                i++
            }
        }
        setStartTarot(true)
        setRandomTarot(tarotRandomList)
    }

    const randomTarotList = randomTarot && randomTarot.map((card) => { //Cria card de cartas Random
        return( 
            <Card
            card = {card}
            base = {tarot}
            action = {getChoosedCards}
            checkStart = {startTarot}
            />
        )
    })

    return (
        <div>
            <Header
                action = {makeRandomTarot}
            />

            <BodyTarot>
                {tarotList && tarotList.length && (
                        <TarotDisplay>

                            {randomTarotList && randomTarotList.length > 0 ? randomTarotList:tarotList}

                        </TarotDisplay>       
                )}
                {choosedCart.length === 1 && (
                    <Modal
                        Choosed = {choosedCart}
                        base = {tarot}
                    />
                )}

            </BodyTarot>
        </div>

    )
}

export default TarotPage
