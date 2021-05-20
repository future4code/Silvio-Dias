import styled from 'styled-components'

export const Button = styled.button`
    background-color: #E86F73;
    color: #E8E7D9;
    font-size: xx-large;
    font-weight: bolder;
    border: none;
    margin: 0.5rem;

    &:hover{
        cursor:  pointer;
        background-color: #E8E7D9;
        color: #E86F73;
    }

`


export const Img = styled.div`
    img{
        width: 500px;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color:#1F1F1F;
`
export const DivResposta = styled.div`
    display: grid;
    grid-template-columns: 230px 230px;
    grid-template-rows: 100px 100px;    

`