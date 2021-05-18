import Cadastro from './components/cadastro/cadastro';
import Usuarios from './components/usuarios/usuario';
import axios from "axios"
import React from 'react'

const BASE_URL =   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"; // URL PADRÃO


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

////////////////////////////////////////// BUSCA USUARIO 
getUsuario = () =>{

  axios.get(BASE_URL,header)
      .then((resposta) => {
      this.setState({usuarios: resposta.data}) //Acrescenta a lista da API no State
  })
      .catch((err) =>{
      alert('tivemos problema ao buscar usuarios')
  })
}
////////////////////////////////////////// DELETAR USUARIO
deleteUsuario = (id) =>{
  const DELETE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
  axios.delete(DELETE_URL+id,header)
      .then((resposta) => {
      alert('Usuario deletado')
      this.getUsuario()
  })
      .catch((err) =>{
      alert('Tivemos um problema ao deletar o usuario')
  })
}

/////////////////////////////////// Cadastro de Usuario
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
        deleteUser = {this.deleteUsuario}
      />
    </div>
  );
}
}

