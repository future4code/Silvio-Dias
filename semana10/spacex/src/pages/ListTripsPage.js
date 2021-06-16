import React from 'react'
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import { AreaCard,ButtonArea } from './style';
import TripCard from '../components/Cards/tripCard'
import { useHistory } from "react-router-dom";

function ListTripsPage(props) {

    const history = useHistory()

return (
    <div>
        <AreaCard>
            <TripCard/>
        </AreaCard>
        <ButtonArea>
            <ButtonBack
                h = {history}
                />   
        </ButtonArea>
  
        </div>
)
}

export default ListTripsPage
