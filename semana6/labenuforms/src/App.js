import React from "react";
import CursandoSuperior from "./componentes/cursandoSuperior";

import DadosGerais from "./componentes/dadosGerais"
import SemSuperior from "./componentes/semSuperior";
import { AreaForm } from "./styled";

export default class App extends React.Component{

  state = {
    formulario: "inicio",
    nomeForm: "",
    idadeForm: "",
    emailForm: "",
    escolaridadeForm: "",
    cursoForm: "",
    unidadeForm: "",
    motivoForm: "",
    complementoForm: "",
    faculdade: false
    

  }

  cadastroNome = (event) =>{
    this.setState({nomeForm: event.target.value})
  }

  cadastroIdade = (event) =>{
    this.setState({idadeForm: event.target.value})
    console.log(this.state.idadeForm)
  }

  cadastroEmail = (event) =>{
    this.setState({emailForm: event.target.value})
    console.log(this.state.emailForm)
  }
  
  cadastroEscolaridade = (event) =>{
    this.state.escolaridadeForm === "Ensino Médio Incompleto" || this.state.escolaridadeForm === "Ensino Médio Completo" ?
    this.setState({faculdade:false})
    : this.setState({faculdade:true})

    
    this.setState({escolaridadeForm: event.target.value})

  }

  cadastroCurso = (event) =>{
    this.setState({cursoForm: event.target.value})
  }

  cadastroUnidade = (event) =>{
    this.setState({unidadeForm: event.target.value})
  }

  cadastroMotivo = (event) =>{
    this.setState({motivoForm: event.target.value})
  }

  cadastroComplemento = (event) =>{
    this.setState({complementoForm: event.target.value})
  }


  verificaroEscolaridade = () =>{

    
  }


  trocaPagina = () =>{
    this.state.faculdade ? this.setState({formulario: "Faculdade"})
   : this.setState({formulario: "SemSuperior"})
 }


  render(){

    console.log(this.state.escolaridadeForm,this.state.faculdade)
    const renderizarPagina = () =>{
      switch(this.state.formulario){
  
        case "inicio":
  
          return (
              <DadosGerais
                nomeForm = {this.cadastroNome}
                idadeForm = {this.cadastroIdade}
                emailForm = {this.cadastroEmail}
                escolaridadeForm = {this.cadastroEscolaridade}
                continuar = {this.trocaPagina}
      
              />
          );
        case "Faculdade":
          return(
            <CursandoSuperior 
              cursoForm = {this.cadastroCurso}
              unidadeForm = {this.cadastroUnidade}
            />
          )
        case "SemSuperior":
          return(
            <SemSuperior 
              motivoForm = {this.cadastroMotivo}
              repostaForm = {this.cadastroComplemento}
            />
          )
        default:
          <DadosGerais
          nomeForm = {this.cadastroNome}
          idadeForm = {this.cadastroIdade}
          emailForm = {this.cadastroEmail}
          escolaridadeForm = {this.cadastroEscolaridade}
  
        />
  
      }
    }

    return(
      <AreaForm>
        {renderizarPagina()}
      </AreaForm>
    )


  }
}

