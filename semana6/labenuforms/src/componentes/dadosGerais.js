import React from "react";

import {ButtonForm,AreaForm} from "../styled"

import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada";


export default class DadosGerais extends React.Component{
    render(){
        return(
        <AreaForm>
            <PerguntaAberta
                pergunta = "Qual o seu nome?"
                respostaForm = {this.props.nomeForm}
            />

            <PerguntaAberta
                pergunta = "Qual a sua idade?"
                respostaForm = {this.props.idadeForm}
            />
            <PerguntaAberta
                pergunta = "Qual o seu E-mail?"
                respostaForm = {this.props.emailForm}
            />

            <PerguntaFechada 
                idSelect = "escolaridade"
                nomeSelect = "Grau de Escolaridade"
                opcoes = {[
                    "Ensino Médio Incompleto",
                    "Ensino Médio Completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo",
                ]}


                respostaForm = {this.props.escolaridadeForm}
                

            />
            
            <ButtonForm
                onClick={this.props.continuar}>
                Continuar
            </ButtonForm>
            
        </AreaForm>
        

        )
    }
}