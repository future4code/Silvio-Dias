import styled from "styled-components"
import {baseColor, complementColor, complementColorDark, secondaryColor} from "../constants/colors"

export const ButtonArea = styled.div( ({ directionFlex }) =>`
    display:flex;
    flex-direction: flex;
    justify-content: center;

    button{
        margin-right:1rem;
    }
`
)

export const HomeArea = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const AreaCard = styled.div`
    height: 60vh;
    width:25vw;
    overflow: auto;

::-webkit-scrollbar {
    height:100%;
}

::-webkit-scrollbar-track {
    background-image: none;
    height:10%;
}
 
::-webkit-scrollbar-thumb {
  background: ${complementColor}; 
  border-radius: 3%;
  height:10%;
}

::-webkit-scrollbar-thumb:hover {
  background: ${complementColorDark} 
}
`

export const Candidates = styled.div`
    display:flex;

`

export const DetailsTrip = styled.div`
    display:flex;
    flex-direction: column;
    color:black;
    background-color:${baseColor};
    padding: 1rem;

    h1{
        color:black;
    }
`