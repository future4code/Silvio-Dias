import React from "react";

import {InputForm} from "../styled"

export default class PerguntaAberta extends React.Component{
    render(){
        return(
            <InputForm 
                placeholder = {this.props.pergunta}
                onChange = {this.props.respostaForm}
            />
        )
    }
}