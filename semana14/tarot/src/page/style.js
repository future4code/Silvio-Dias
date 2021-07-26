import styled from "styled-components"

export const TarotDisplay = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`

export const BodyTarot = styled.div`
    display:flex;
    justify-content: center;
`