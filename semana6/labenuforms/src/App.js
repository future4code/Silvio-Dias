import React from "react";

import DadosGerais from "./componentes/dadosGerais"

export default class App extends React.Component{

  state = {
    nomeForm: "",
    idadeForm: "",
    emailForm: "",
    escolaridadeForm: "",

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
    alert('oi')
    console.log(event)
    this.setState({escolaridadeForm: event.target.value})
    console.log(this.state.escolaridadeForm)
  }


  render(){

    return (
      <div>
        <button onClick={this.teste}>teste</button>
        <DadosGerais
          nomeForm = {this.cadastroNome}
          idadeForm = {this.cadastroIdade}
          emailForm = {this.cadastroEmail}
          escolaridadeForm = {this.cadastroEscolaridade}

        />

      </div>
    );

  }
}

