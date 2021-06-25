import styled, { keyframes } from "styled-components"
import { white, basic } from "../../constants/color"

const skew = keyframes`
    0% { transform: skewX(50deg) }
    0.2%{ transform: skewX(-50deg) }
    1%  { transform: none };
`

export const CardPost = styled.div`
    display: flex;
    word-break: break-all;
    background-color: ${white};
    box-shadow: 0 0 5px ${white}; 
    margin: 2rem;
    padding:1rem;

    

    h2,h3{ 
        width: fit-content;
        :hover{
            animation: ${skew} 1s infinite;
        }
    }

`

export const Title = styled.div`
    background-color: ${basic};
    width: 100%;
    padding: 1rem;
    color: ${white};
    margin-bottom: 1rem;
`

export const CardArea = styled.div`
    display:flex;
    flex-direction: column;

`

export const VoteArea = styled.div`
    margin-right: 1rem;

`

export const SocialComents = styled.div`
    margin-top: 1rem;
    display:flex;
`