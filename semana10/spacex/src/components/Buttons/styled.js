import styled from "styled-components"
import { baseColor, complementColor, primaryColor, secondaryColor } from "../../constants/colors"

export const areaButton = styled.div``


export const ButtonStyle = styled.button( ({customStyle}) =>`

    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: none;
    color: ${baseColor}; 
    border: 1px solid ${baseColor};
    background-color: ${customStyle == "secondary" ? secondaryColor: "none" };
    font-size: x-large;
    border-radius: 3%;
    padding: 1rem;


    &:hover{
        
            @-webkit-keyframes color-change-2x {
        0% {
            background: ${primaryColor};
        }
        100% {
            background: ${secondaryColor};
        }
        }
        @keyframes color-change-2x {
        0% {
            background: ${primaryColor};
        }
        100% {
            background: ${secondaryColor};
        }
        }

        -webkit-animation: color-change-2x 1s linear infinite alternate both;
        animation: color-change-2x 1s linear infinite alternate both;   


        cursor:pointer;

        }

    &:active{
        border: solid 1px ${secondaryColor}
    }
`
)