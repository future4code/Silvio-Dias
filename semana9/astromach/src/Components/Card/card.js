import axios from 'axios'
import { useEffect, useState } from 'react'
import { enterStudent} from '../api'

import {PhotoProfile,ButtonArea,NameAge,ButtonMatch } from './style'
import Loading from '../Img/loading.svg'


import { BiHeartCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

import { IconContext } from "react-icons";


const Card = () => {

const [profile, setProfile] = useState([{}])
const [changeCard, setChangeCard] = useState(false)
const [isMatch,setIsMach] = useState(false)

useEffect(() => {
    getProfiles()

}, [changeCard])



const checkProfile = (response) =>{
    setProfile(response)
}

const swapCard = () => {
    setChangeCard(!changeCard)
}

const getProfiles = () =>{
    axios
    .get(enterStudent() + "person")
    .then((response) => {
        console.log(response)
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
            <div>
            {profile !== 'acabou' ?(
                <div>
                <PhotoProfile style={{ backgroundImage: `url(${profile.photo})` }}> 
                    <NameAge>
                    <h1>{profile.name}</h1>
                    <p>,{profile.age}</p>
                    </NameAge>

                    <p>{profile.bio}</p>
                </PhotoProfile>

                <ButtonArea>
                    <IconContext.Provider value={{ color: "red" }}>
                        <a onClick = {() => getMatch(profile.id,false)}><ImCancelCircle/></a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "green" }}>
                        <a onClick = {() => getMatch(profile.id,true)}><BiHeartCircle/></a>
                    </IconContext.Provider> 
                </ButtonArea>
                  </div>

            ):
            <div>
            
            <PhotoProfile>
                <p>Estamos com problemas para achar novos perfis perto de você, tente resetar os Matchs</p>
            </PhotoProfile>
            </div>
            }
    </div>
        

      

    )
}

export default Card