import axios from 'axios'
import { useEffect, useState } from 'react'
import { enterStudent, restartMatch} from '../api'

import {PhotoProfile,ButtonArea,NameAge,
        ButtonProfile,ProfilePage,LoadingArea,
        Description,Bio,OverMatch } from './style'
        
import Loading from '../Img/loading.svg'


const Card = (props) => {

const [profile, setProfile] = useState("")
const [changeCard, setChangeCard] = useState(false)
const [isMatch,setIsMach] = useState(false)
const [hover,setHover] = useState([false])

useEffect(() => {
    getProfiles()

}, [changeCard])


const checkProfile = (response) =>{
    setProfile(response)
    console.log(profile)
}

const swapCard = () => {
    setChangeCard(!changeCard)
}

const getProfiles = () =>{
    axios
    .get(enterStudent() + "person")
    .then((response) => {

        if(!response.data.profile){
            checkProfile('acabou')
        }else{
            checkProfile(response.data.profile)
        }
        
    })
    .catch((err) =>{
        console.log(err)
    })
} 

const getMatch = (id,choice) => {
    const body = {
        "id": id,
        "choice": choice
    }

    setProfile("")
    swapCard()
    axios
    .post(enterStudent() + "choose-person",body)
    .then((response) => {
        setIsMach(response.data.isMatch)
        
        if(isMatch){
            alert('Eeeeeeita, vai q deu Match')
        }
        
    })
    .catch((err) => {
        alert(err)
    })

    setHover([false])
}

    const hoverButton = (event) =>{
        const mouseSituation = event._reactName.toString()
        const direction = event.target.id
        if(mouseSituation === "onMouseLeave"){
            setHover([false])

        }else{
            setHover([true,direction])
            
        }
    
    }

    const resetMatch = () =>{
        restartMatch()
        getProfiles()
        swapCard()
    }

    if(!profile){
        return(
            <LoadingArea>
            <img src={Loading} />
            </LoadingArea>
        )
    }

    return(
        <ProfilePage >
            {profile !== 'acabou' ? (
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
                ):(
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