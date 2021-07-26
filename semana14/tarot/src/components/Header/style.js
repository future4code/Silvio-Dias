import styled from "styled-components"

export const HeaderArea = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: purple;
    height: 10vh;
    padding: 0 10rem;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }

`

export const Titulo = styled.h1`
    font-size: 72px;
    :hover{
        cursor:pointer;
    }
`

export const ButtonHeader = styled.button`
    background:none;
    border: 2px solid yellow;
    border-radius: 5px;
    outline:none;
    height:fit-content;
    padding:1rem;
    color: yellow;
    font-weight: bolder;
    font-size: large;

    @media only screen and (max-width: 600px) {
        font-size:medium;
        padding:0.5rem;
    }

    :hover{
        cursor:pointer;
        color:purple;
        background-color: yellow;

    }
`