import React from 'react'
import Input from '../components/Input/input'



function CreateTripPage() {
    const history = useHistory()
    return (
        <div>
            <Input
            admin = {true}
            />
            <Button text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default CreateTripPage
