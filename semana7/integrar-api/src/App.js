import Cadastro from './components/cadastro/cadastro';
import Usuarios from './components/usuarios/usuario';
import axios from "axios"
import React from 'react'

const BASE_URL =   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";


const header = {
  headers: {
    Authorization: "silvio-paiva"
  }
}


export default class App extends React.Component{

  state = {
    usuarios: [],
    nomeCadastro: "",
    emailCadastro: ""
}


getUsuario = () =>{

  axios.get(BASE_URL,header)
      .then((resposta) => {
      console.log(resposta.data)
      this.setState({usuarios: resposta.data})
  })
      .catch((err) =>{
      console.log(err.message)
  })
}




cadastrarUsuario = () => {

    const body = {
        name: this.state.nomeCadastro,
        email: this.state.emailCadastro
    }

    axios.post(BASE_URL,body,header)
        .then((resposta) => {
            alert('Cadastro realizado')
            this.getUsuario()
 
    })
        .catch((err) =>{
            alert('Tivemos um problema no cadastro')
            console.log(err)
            console.log(BASE_URL,body,header)
    })
}
  
handleNome = (event) =>{
    this.setState({nomeCadastro: event.target.value})
}

handleEmail = (event) =>{
    this.setState({emailCadastro: event.target.value})
}

render(){
  return (
    <div>
      <Cadastro
        handleNome = {this.handleNome}
        handleEmail = {this.handleEmail}
        cadastrarUsuario = {this.cadastrarUsuario}
      />
      <Usuarios
        lista = {this.getUsuario}
        listaUsuarios = {this.state.usuarios}
      />
    </div>
  );
}
}

