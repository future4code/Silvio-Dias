import React from 'react'
import SelectCountry from './SelectCountry'
import useInput from '../../hooks/useInput'
import Button from '../Buttons/Button'

export function Input(props) {
    const [name,setName] = useInput('')
    const [date,setDate] = useInput('')
    const [messege,setMessege] = useInput('')
    const [ocupation,setOcupation] = useInput('')
    const [place,setPlace] = useInput('')

    const teste = () => {
        console.log(name)
    }

    return (
        <div>
            <input onChange = {setName} placeholder = "Nome" type = "text"/>
            <input onChange = {setMessege} placeholder = {props.admin? "Descrição":"Por que ir a uma viagem espacial?"} type = "text"/>
            <input type = "date" onChange = {setDate} placeholder = {props.admin? "Data de viagem":"Data de Nascimento"} type = "text"/>
            <input onChange = {setOcupation} placeholder = "Profissão" type = "text"/>
            <SelectCountry action = {setPlace} admin = {!props.admin}/>
            <Button 
            texto = {props.admin? "Cadastrar":"Enviar Pedido"}
            action = {teste}
            customStyle = {"Primary"}
            />
        </div>  
    )
}

export default Input
