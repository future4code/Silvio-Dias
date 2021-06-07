import React from 'react'
import useInput from '../hooks/useInput'

function ApplicationFormPage() {
    const [name,setName] = useInput('')
    const [age,setAge] = useInput('')
    const [messege,setMessege] = useInput('')
    const [job,setJob] = useInput('')

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <select>
                
            </select>
            <Input onChange = {setName} placeholder = "Nome" type = "text"/>
            <Input onChange = {setAge} placeholder = "Idade" type = "text"/>
            <Input onChange = {setMessege} placeholder = "Texto de Candidatura" type = "text"/>
            <Input onChange = {setJob} placeholder = "Profissão" type = "text"/>
            <select>
                
            </select>
            <button>Voltar</button>''
            <button>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage
