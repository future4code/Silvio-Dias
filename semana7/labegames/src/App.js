import React from "react";
import axios from "axios";
import Pokehome from "./components/home/pokeHome";
import { Button, Div } from "./components/home/styled";


const BASE_URL = "https://pokeapi.co/api/v2/"


export default class App extends React.Component{

  state = {
    jogar: false
  }
    
  jogar = () =>{
    this.setState({jogar: true})
  }

  render(){

    if(this.state.jogar === true){
      return(
        <Pokehome/>
      )
    }

    return (
      <Div>
        <Button onClick = {this.jogar}>Começar o jogo</Button>
      </Div>
    );
  }
  
  }

