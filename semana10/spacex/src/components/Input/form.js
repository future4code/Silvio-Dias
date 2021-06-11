import React from 'react'
import SelectCountry from './SelectPlace'
import useForm from '../../hooks/useForm'
import Button from '../Buttons/Button'
import { BASE_URL,headers } from '../../constants/url'
import axios from "axios"

export function Form(props) {
    const { form, onChange } = useForm({id: props.id})

    const cadastrar = (event) => {
        event.preventDefault();

        axios
        .post(`${BASE_URL}/trips${!props.admin ? `/${form.id}/apply`:""}`,form,headers)
        .then((response) => {
            console.log(response)
            document.getElementById('form').reset()
        })
        .catch((err) => {
            console.log(err)
            
        })
      };

    return (
        <div>
            <form id = "form" onSubmit = {cadastrar}>

            <input
                name = {"name"}
                onChange = {onChange}
                placeholder = "Nome"
                type = "text"/>

            <input
                name =  {props.admin? "description":"applicationText" } onChange = {onChange}
                placeholder = {props.admin? "Descrição":"Por que ir a uma viagem espacial?"}
                type = "text"
            />


            <input
                name = {props.admin? "date":"age"}
                type = "date"
                onChange = {onChange}
                placeholder = {props.admin? "Data de viagem":"Data de Nascimento"} 
                type = "text"
            />
            <input 
                name = {props.admin? "durationInDays":"profession" }
                onChange = {onChange}
                placeholder = {props.admin?  "Duração em Dias":"Profissão"}
                type = "text"
            />

            <SelectCountry
                nameSelect = {props.admin? "planet":"country" }
                action = {onChange}
                admin = {props.admin}
            />

            <Button 
            typeButton = "submit"
            text = {props.admin? "Cadastrar":"Enviar Pedido"}
            customStyle = {"Primary"}
            />

            </form>
        </div>  
    )
}

export default Form
