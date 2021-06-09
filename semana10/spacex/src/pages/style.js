import styled from "styled-components"

export const ButtonArea = styled.div( ({ directionFlex }) =>`
    display:flex;
    flex-direction: ${directionFlex ? "flex;":"column;"};

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