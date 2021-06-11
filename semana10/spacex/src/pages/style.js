import styled from "styled-components"

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
    height: 80vh;
    overflow: auto;
`