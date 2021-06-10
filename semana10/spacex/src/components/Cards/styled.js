import styled from "styled-components"
import { baseColor } from "../../constants/colors"

export const AreaCard = styled.div`
    height: 80vh;
    overflow: auto;
`

export const Card = styled.div(({customStyle}) =>`
    background-color: ${baseColor};
    padding: 1rem;
    margin: 1rem;
    box-shadow: ${baseColor} 0px 0px 4px;
    display:flex;
    flex-direction: ${customStyle === "admin" ? "row;":"column;"};
    justify-content:  ${customStyle === "admin" ? "space-between;":"flex-start;"} ;
`
)