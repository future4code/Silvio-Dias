import styled from "styled-components"
import { secondary, white } from "../../constants/color"

export const ButtonVote = styled.div`
    background:none;
    color: ${secondary};
    font-size: x-large;


    :hover{
        cursor:pointer;
    }
`

export const SocialIcon = styled.img`
    height:20px; 
    margin-right: 0.5rem;
`

export const Button = styled.button`
    background: none;
    border: 2px solid ${secondary};
    border-radius: 10%;
    color: ${secondary};
    padding: 0.5rem;
    font-size: large;
    transition: 0.4s;

    :hover{
        cursor:pointer;
        background-color: ${secondary};
        color: ${white}
    }
`
