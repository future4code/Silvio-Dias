import styled from "styled-components"
import { basic, white } from "../../constants/color"

export const ButtonVote = styled.div`
    background:none;
    color: ${basic};
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
    border: 2px solid ${white};
    border-radius: 10%;
    color: ${white};
    padding: 0.5rem;
    font-size: large;
`
