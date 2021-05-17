import React from "react";

import {DropboxForm} from "../styled"

export default class PerguntaFechada extends React.Component{
    
    render(){

        const opcoesSelect = this.props.opcoes.map((opcao) => {
            return(
                <option value ={opcao}>{opcao}</option>
            )
        })

        return(
            <div>
                <label for = {this.props.idSelect} >
                    {this.props.nomeSelect}

                </label>
                <DropboxForm 
                    onChange = {this.props.respostaForm}
                    id = {this.props.idSelect}
                >
                    
                    {opcoesSelect}

                </DropboxForm>
            </div>
        )
    }
}