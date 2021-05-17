import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default class SemSuperior extends React.Component{
    render(){
        return(
            <div>
            <PerguntaAberta
                pergunta = "Por que você não terminou um curso de graduação?"
                respostaForm = {this.props.motivoForm}
                            
            />  


            <PerguntaFechada
                idSelect = "complementar"
                nomeSelect = "Você fez algum curso complementar?"
                opcoes = {["Curso técnico","Cursos de inglês","Não fiz curso complementar"]}
                respostaForm = {this.props.cursoComplementar}
                            
            />      

            

            </div>
            
        )
    }
}