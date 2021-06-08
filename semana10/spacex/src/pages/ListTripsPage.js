import React from 'react'
import Cards from "../components/Cards/Cards"

function ListTripsPage() {

return (
    <div>
        <Cards
            typeList = "usuario"
        />
        <Button text = "Voltar" action = {() => goToBack(history)}/>
    </div>
)
}

export default ListTripsPage
