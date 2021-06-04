import axios from 'axios'
import { useEffect, useState } from 'react'
import { enterStudent, restartMatch} from '../api'

import {PhotoProfile,ButtonArea,NameAge,
        ButtonProfile,ProfilePage,
        Description,Bio,OverMatch } from './style'

import { LoadingArea } from "../style"
import Loading from '../Img/loading.svg'


const Card = (props) => {

const [profile, setProfile] = useState("") //Armazena perfil
const [changeCard, setChangeCard] = useState(false) //Controlador de troca de card
const [isMatch,setIsMach] = useState(false) // Verifica se teve Match
const [hover,setHover] = useState([false]) //Verifica mouse nos botões

useEffect(() => {
    getProfiles()

}, [changeCard])


const checkProfile = (response) =>{
    setProfile(response) //Controla estado de profile
}

const swapCard = () => {
    setChangeCard(!changeCard) //Ativa a troca de card
}

const getProfiles = () =>{
    axios
    .get(enterStudent() + "person")
    .then((response) => {

        if(!response.data.profile){
            checkProfile('acabou') // Notificação de que acabaram os profiles
        }else{
            checkProfile(response.data.profile) // Armazena profile
        }
        
    })
    .catch((err) =>{
        alert(err)
    })
} 

const getMatch = (id,choice) => {
    const body = {
        "id": id,
        "choice": choice
    }

    setProfile("") //Limpa profile para garantir loading do usuario
    swapCard() //Troca de card

    axios
    .post(enterStudent() + "choose-person",body)
    .then((response) => {
        setIsMach(response.data.isMatch)
        
        if(isMatch){
            alert('Eeeeeeita, vai q deu Match') //Alerta Match
        }
        
    })
    .catch((err) => {
        alert(err)
    })

    setHover([false]) //garante que animação de card esteja resetada
}

    const hoverButton = (event) =>{
        const mouseSituation = event._reactName.toString()
        const direction = event.target.id
        if(mouseSituation === "onMouseLeave"){
            setHover([false]) //Desativa animação

        }else{
            setHover([true,direction]) //Ativa animação e indica direção por botão apertado
            
        }
    
    }

    const resetMatch = () =>{
        restartMatch() // Reinicia API 
        setProfile("") // Limpa profile
        swapCard() //Troca o card
    }

    if(!profile){ //Exibir loading
        return( 
            <LoadingArea>
            <img src={Loading} /> 
            </LoadingArea>
        )
    }

    return(
        <ProfilePage >
            {profile !== 'acabou' ? ( //Se não acabou, exibi card
                <div>
                    <PhotoProfile rotate = {hover} style={{ backgroundImage: `url(${profile.photo})` }}> 
                        <Description>
                        <NameAge>
                            <h1>{profile.name}</h1>
                            <p>,{profile.age}</p>
                            </NameAge>

                            <Bio>{profile.bio}</Bio>
                        </Description>
                    </PhotoProfile>

                    <ButtonArea>
                            <ButtonProfile id ="cancel" cancel onMouseOver = {hoverButton} onMouseLeave = {hoverButton} onClick = {() => getMatch(profile.id,false)}> &#10006;</ButtonProfile>
                            <ButtonProfile id="heart" heart  onMouseOver = {hoverButton} onMouseLeave = {hoverButton} onClick = {() => getMatch(profile.id,true)}>&#10084;</ButtonProfile>
                    </ButtonArea>
                </div>
                ):( // Se acabou, alerta que acabou e exibi botão para resetar
                <div>     
                    <OverMatch>
                        <p>Estamos com problemas para achar novos profileis perto de você, tente resetar os Matchs</p>
                        <a onClick = {resetMatch}> Resetar Match </a>
                    </OverMatch>
                </div>
                )  
                 
            }  

        </ProfilePage>
    )
}

export default Card