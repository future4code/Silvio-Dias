import React from 'react'

import { Card } from "./styled"
import Button from '../Buttons/Button';

function Cards(props) {

return (
        <Card customStyle = {props.customStyle}>
            <h2>{props.name}</h2> 
            <p>{props.description}</p>
            <p>{props.place}</p>
            <p>{props.ocupation}</p>
            <p>{props.date}</p>
            <Button
            text = {props.textButton}
            customStyle = {props.buttonStyle}
            />
        </Card>
)
}


export default Cards
