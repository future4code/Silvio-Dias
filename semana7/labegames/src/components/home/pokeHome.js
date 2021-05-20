import React from "react"
import axios from "axios"
import { Button, Div, Img, DivResposta } from "./styled"


const BASE_URL = "https://pokeapi.co/api/v2/"

export default class Pokehome extends React.Component{

    state = {
        pokemonHome: [],
        pokeEscolhas: [],
        ponto: 0
    }

    componentDidMount(){
        this.gerarPokemon()
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }   

    gerarPokemon = () => {
        const random = Math.floor((Math.random() * 898) +1)
        axios
          .get(BASE_URL+`pokemon/${random}`)
          .then((resposta) => {
            this.setState({pokemonHome: {nome: resposta.data.name, img: resposta.data.sprites.front_default}})  
            this.gerarEscolhas()      
          })
          .catch((erro) => {
            alert(erro.statusText)
          })
          
      }

      criarEscolha = (poke) => {
        this.setState({pokeEscolhas: [...this.state.pokeEscolhas, poke]})
      }

      gerarEscolhas = () => {

        let i = 0
            while(i < 3){
                const random = Math.floor((Math.random() * 898) +1)
                axios   
                .get(BASE_URL+`pokemon/${random}`)
                .then((resposta) =>{
                    this.criarEscolha(resposta.data.name)
                    this.ordenar()
                })
                .catch((erro)=> {
                    alert(erro.statusText)
                })

                i++ 
            }

            this.setState({pokeEscolhas: [...this.state.pokeEscolhas, this.state.pokemonHome.nome]})
            
      }

      confirmarNome = (event) => {
        if(event.target.value === this.state.pokemonHome.nome){
            alert(`Você acertou o nome do ${this.Capitalize(this.state.pokemonHome.nome)}`)
            this.setState({ponto: this.state.ponto+10})
            
        }else{
            alert(`Você errou o nome, o certo é ${this.Capitalize(this.state.pokemonHome.nome)}`)
            this.setState({ponto: this.state.ponto-10})
        }
        this.setState({pokeEscolhas: []})
        this.gerarPokemon()

    }

    ordenar = () => {

       let novaOrdem = [...this.state.pokeEscolhas]
       novaOrdem = novaOrdem.sort((a, b) => Math.random() - 0.7)
       this.setState({pokeEscolhas: novaOrdem})
    }



    render(){

        const escolhas = this.state.pokeEscolhas.map((escolha) =>{
            return(
                <Button 
                onClick = {this.confirmarNome}
                value = {escolha}>
                {this.Capitalize(escolha)}
                </Button>
            )
        })

        return(
            <Div>
                <h1>Quem é esse Pokémon?</h1>
                <h2>Ponto: {this.state.ponto}</h2>
                <Img>
                    <img src = {this.state.pokemonHome.img}/>
                </Img>
                <DivResposta>
                    {escolhas}
                </DivResposta>

            </Div>
     
            
        )
    }
    
}