import React from 'react'
import Input from '../components/Input/input'

function ApplicationFormPage() {
    const history = useHistory()

    return (
        <div>
            <Input/>
            <Button text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default ApplicationFormPage
