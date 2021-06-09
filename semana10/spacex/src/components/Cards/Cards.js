import React from 'react'
import useTrips from '../../hooks/useTrips'
import { useHistory } from "react-router-dom";
import { goTo } from '../../routes/Cordinator';
import { AreaCard, Card } from "./styled"
import Button from '../Buttons/Button';

function Cards(props) {

return (
        <Card>
            <h2>{props.name}</h2> 
            <p>{props.description}</p>
            <p>{props.place}</p>
            <p>{props.ocupation}</p>
            <p>{props.date}</p>
            <Button
            text = "Cadastrar"
            />
        </Card>
)
}


export default Cards
