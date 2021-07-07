import styled from "styled-components"

export const Background = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

`

export const ModalBody = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    box-shadow: 0px 0px 13px 0px black;
    width: 40%;

    @media only screen and (max-width: 600px) {
        width:80%;
    }
`

export const CardModal = styled.div`
    display:flex;
    padding:1rem;
    p{
        display:flex;
        flex-direction: column;
        justify-content: center;
        padding:1rem;
    }
    
`

export const CloseButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    padding-right: 1rem;
`

export const CloseButton = styled.button`
    background:none;
    border:none;
    font-size: large;

    :hover{
        cursor:pointer
    }
`