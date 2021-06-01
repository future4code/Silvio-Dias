import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {

  const [checkPokemon, setcheckPokemon] = useState({})


  // método que roda após a montagem do componente
  useEffect(() => { 
    pegaPokemon(props.pokemon);


  }, [props.pokemon])

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setcheckPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <div>
        {checkPokemon.name ? (
          <div>
            <p>{checkPokemon.name}</p>
            <p>{checkPokemon.weight}  Kg</p>
            {checkPokemon.types && <p>{checkPokemon.types[0].type.name}</p>}
              {checkPokemon.sprites && (
              <img src={checkPokemon.sprites.front_default} alt={checkPokemon.name} />
              )}
          
          </div>

        ):(<p>Escolha um Pokémon</p>) }

      </div>
    );
  }


export default PokeCard;
