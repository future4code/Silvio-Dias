import axios from 'axios'
import { useEffect, useState } from 'react'
import { enterStudent, restartMatch} from '../api'

import {PhotoProfile,ButtonArea,NameAge,
        ButtonProfile,ProfilePage,
        Description,Bio,OverMatch,Photo } from './style'

import { LoadingArea } from "../style"
import Loading from '../Img/loading.svg'


const Card = (props) => {

const [profile, setProfile] = useState("") //Armazena perfil
const [changeCard, setChangeCard] = useState(false) //Controlador de troca de card
const [isMatch,setIsMach] = useState(false) // Verifica se teve Match
const [hover,setHover] = useState([false]) //Verifica mouse nos botões
const [position,setPosition] = useState("") //Verifica mouse nos botões
const [directionCard,setDirectionCard] = useState("neutro") //Controle de swipe do card
const [displayImage,setDisplayImage] = useState(true) //Controla se imagem aparece ou some


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

    axios
    .post(enterStudent() + "choose-person",body)
    .then((response) => {
        setIsMach(response.data.isMatch)
        
        if(isMatch){
            alert('Eeeeeeita, vai q deu Match') //Alerta Match
        }
        swapCard() //Troca de card
        setDirectionCard("neutro") //Neutraliza direção do card
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

    const startDrag = (event) =>{
        setPosition(event.clientX)
        setTimeout(() => {
            setDisplayImage(false)
        }, 0)
    }

    const drag = (event) => {
        const directionX = event.pageX
        if(directionX !== 0 || directionX === position){ //Verifica se o card foi paralisado no dragg
 
            if(directionX > position + 100){ // Controla a distancia para curtir em swipe
                setDirectionCard("direita") 
    
            }else if(directionX < position - 100){ //Controla distancia para negar sem swipe
                setDirectionCard("esquerda")
    
            }else if(directionX <= position + 50 || directionX >= position - 50  ){// Controla volta de card para centro
                setDirectionCard("neutro")
            }
        }
    }

    const endDrag = (id,event) => {
        if(directionCard === "direita"){
            getMatch(id,true) //Curti em swipe
        }else if(directionCard === "esquerda"){
            getMatch(id,false) //Não em swipe
        }
        setDisplayImage(true)
    }

    const restartMatch = () =>{ //Reinicia API

        axios
        .put(enterStudent() + "clear")
        .then((response) => {
            swapCard() //Troca o card
        })
        .catch((err) => {
            swapCard() //Troca o card
            alert(err)
        })
    }

    const resetMatch = () =>{
        setProfile("") // Limpa profile
        restartMatch() // Reinicia API 
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
                    <PhotoProfile directionCard = {directionCard}>
                        {directionCard === "neutro" ? "":(directionCard ==="direita" ?(<h1>Curti</h1>):(<h1>Não</h1>))}
                        <Photo show = {displayImage}   draggable onDrag = {drag} onDragEnd = {() => endDrag(profile.id)} onDragStart = {startDrag} rotate = {hover} style={{ backgroundImage: `url(${profile.photo})` }}> 
                            <Description>
                            <NameAge>
                                <h1>{profile.name}</h1>
                                <p>,{profile.age}</p>
                                </NameAge>

                                <Bio>{profile.bio}</Bio>
                            </Description>
                        </Photo>
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