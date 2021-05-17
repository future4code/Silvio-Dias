import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class CursandoSuperior extends React.Component{
    render(){
        return(
            <div>
            <PerguntaAberta
                pergunta = "Qual o curso?"
                respostaForm = {this.props.cursoForm}
                            
            />  


            <PerguntaAberta
                pergunta = "Qual a unidade de ensino? "
                respostaForm = {this.props.unidadeForm}
                            
            />      

            

            </div>
            
        )
    }
}