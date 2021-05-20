import React from "react"
import axios from "axios"
import styled from 'styled-components'
import { Button, Div, Img, INput } from "./styled"


const BASE_URL = "https://pokeapi.co/api/v2/"

export default class Pokehome extends React.Component{

    state = {
        pokemonHome: [],
        pokemonNome: "",
        ponto: 0
    }

    componentDidMount(){
        this.gerarPokemon()
    }

    nomePokemon = (event) => {
        this.setState({pokemonNome: event.target.value})
    }

    gerarPokemon = () => {
        const random = Math.floor((Math.random() * 898) +1)
        axios
          .get(BASE_URL+`pokemon/${random}`)
          .then((resposta) => {
            this.setState({pokemonHome: {nome: resposta.data.name, img: resposta.data.sprites.front_default}})        
          })
          .catch((erro) => {
            alert(erro.statusText)
          })
      }

      confirmarNome = () => {
        if(this.state.pokemonNome === this.state.pokemonHome.nome){
            alert(`Você acertou o nome do ${this.state.pokemonHome.nome}`)
            this.setState({ponto: this.state.ponto+10})
            
        }else{
            alert(`Você errou o nome, o certo é ${this.state.pokemonHome.nome}`)
            this.setState({ponto: this.state.ponto-10})
        }

        this.gerarPokemon()
    }


    render(){


        return(
            <Div>
                <h1>Qual é esse Pokémon?</h1>
                <h3>Ponto: {this.state.ponto}</h3>
                <Img>
                    <img src = {this.state.pokemonHome.img}/>
                </Img>
                <INput
                 placeholder ="Digite o nome do Pokémon"
                 onChange = {this.nomePokemon}
                 />
                 <Button onClick = {this.confirmarNome}>Confirmar nome</Button>

            </Div>
     
            
        )
    }
    
}