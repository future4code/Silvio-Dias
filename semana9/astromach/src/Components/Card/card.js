import axios from 'axios'
import { useEffect, useState } from 'react'
import { enterStudent} from '../api'

import {PhotoProfile,ButtonArea,NameAge,
        ButtonMatch,ProfilePage,HeartMatch,
        ButtonCancel,CancelMatch,BtnTest } from './style'
        
import Loading from '../Img/loading.svg'


import { BiHeartCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

import { IconContext } from "react-icons";

import { DragDropContext,Droppable,Draggable   } from 'react-beautiful-dnd';


const Card = () => {

const [profile, setProfile] = useState("")
const [changeCard, setChangeCard] = useState(false)
const [isMatch,setIsMach] = useState(false)
const [mouse,setMouse] = useState("")

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
        console.log(err.response.data.message)
    })
}

    if(!profile){
        return(<PhotoProfile>
            <img src={Loading} />
        </PhotoProfile>)
    }


    return(
        <ProfilePage >
            {profile !== 'acabou' ? (
                <div>
                    <PhotoProfile style={{ backgroundImage: `url(${profile.photo})` }}> 
                        <NameAge>
                        <h1>{profile.name}</h1>
                        <p>,{profile.age}</p>
                        </NameAge>

                        <p>{profile.bio}</p>
                    </PhotoProfile>

                    <BtnTest>
                    <ButtonArea>
                            <ButtonCancel onClick = {() => getMatch(profile.id,false)}>
                                <CancelMatch>&#128473; </CancelMatch>
                            </ButtonCancel>
                            <ButtonMatch onClick = {() => getMatch(profile.id,true)}><HeartMatch>&#10084; </HeartMatch>
                            </ButtonMatch>
                    </ButtonArea>
                    </BtnTest>
                </div>
                ):(
                <div>     
                    <PhotoProfile>
                        <p>Estamos com problemas para achar novos profileis perto de você, tente resetar os Matchs</p>
                    </PhotoProfile>
                </div>
                )   
            }  
        </ProfilePage>
        

      

    )
}

export default Card