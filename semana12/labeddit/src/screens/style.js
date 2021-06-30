import styled, { keyframes } from "styled-components";
import { secondary, white } from "../constants/color";

export const Titulo = styled.h1`
    color: ${white};
`

export const FormCard = styled.div`
    background-color: ${white};
    box-shadow: 0 0 5px ${white};

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    padding:2rem;
`

const skew = keyframes`
    0% { transform: skewX(50deg) }
    0.2%{ transform: skewX(-50deg) }
    1%  { transform: none };
`

export const Link = styled.h3`

    :hover{
        cursor: pointer;
        text-shadow: 0 0 5px ${secondary};
        animation: ${skew} 1s infinite;
    }
`