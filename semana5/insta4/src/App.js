import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DivInput = styled.div `
  display: flex;
  justify-content:center;
  align-items: center;
`

const InputPost = styled.input`

  border:solid 1px gray;
  font-family: 'Courier New', Courier, monospace;
  margin: 2rem;
  ` 
const ButtonPost = styled.button`
  background-color: pink;
  height: 20px;
`


class App extends React.Component {

  state = {
    arrayPost:[
      {id: 1, nome: "paulinha", fotoPessoa: "https://picsum.photos/50/50", postFoto: "https://picsum.photos/200/120"},
      {id: 2, nome: "teste 2", fotoPessoa: "https://picsum.photos/50/20", postFoto: "https://picsum.photos/200/150"},
      {id: 3, nome: "Silvio", fotoPessoa: "https://picsum.photos/50/30", postFoto: "https://picsum.photos/200/148"}
    ],

    inputNome: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  handleNome = (event) =>{
    this.setState({inputNome: event.target.value})
  }

  handleFotoUsuario = (event) =>{
    this.setState({inputFotoUsuario: event.target.value})
    console.log(event.target.value)
  }

  handleFotoPost = (event) =>{
    this.setState({inputFotoPost: event.target.value})
    console.log(event.target.value)
  }


  OnClickAdicionar = () => {
    const novoPost = {
      id: Math.random(),
      nome: this.state.inputNome,
      fotoPessoa: this.state.inputFotoUsuario,
      postFoto: this.state.inputFotoPost
    };

    

    this.setState({
      arrayPost:[...this.state.arrayPost, novoPost],
      inputNome: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
  
    });
    console.log(this.state.inputNome)
    console.log(novoPost)
  };



  render() {
    const posts = this.state.arrayPost.map((post,index) =>{
      return(
        <Post key={post.id}
          nomeUsuario={post.nome}
          fotoUsuario ={post.fotoPessoa}
          fotoPost = {post.postFoto}
        
        />
      );
    });

    return (
      <MainContainer>
        <DivInput>
          <InputPost 
              placeholder = {"Nome"}
              value = {this.state.inputNome}
              onChange = {this.handleNome}
            />
            <InputPost 
              placeholder = {"URL Foto Usuario"}
              value = {this.state.inputFotoUsuario}
              onChange = {this.handleFotoUsuario}
            />

            <InputPost 
              placeholder = {"URL Foto Post"}
              value = {this.state.inputFotoPost}
              onChange = {this.handleFotoPost}
            />

            <ButtonPost
              onClick={this.OnClickAdicionar}>Adicionar Post
            </ButtonPost>
        </DivInput> 
        {posts}        
      </MainContainer>

      
    );
  }
}

export default App;
