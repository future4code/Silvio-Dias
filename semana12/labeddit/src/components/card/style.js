import styled, { keyframes } from "styled-components"

export const CardPost = styled.div`
    background-color: gray;
    margin: 2rem;
    padding:1rem;

`

const glitch = keyframes`

from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`

const jitter = keyframes`
    from{
        transform: translateX(0);
    }

    to{
        transform: translateX(-.2em) skew(-40deg);
    }
`

export const CardTitulo = styled.h2`

    text-transform: uppercase;
    mix-blend-mode: screen;
    color: transparent;
    text-shadow: 0 0 .125rem rgba(0,255,0,1);
    animation: ${glitch }2s linear infinite;
    
    /* ::before

  ::before,
  ::after
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: screen
    animation ${glitch} 5s infinite alternate;
  ::before
    text-shadow: 0 0 .125rem rgba(255,0,0,1);
  ::after
    text-shadow: 0 0 .125rem rgba(0,0,255,1);
    animation-delay: 5s; */


`