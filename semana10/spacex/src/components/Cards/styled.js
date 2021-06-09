import styled from "styled-components"
import { baseColor, complementColor, secondaryColor } from "../../constants/colors"

export const AreaCard = styled.div`
    height: 80vh;
    overflow: auto;
`

export const Card = styled.div`
    background-color: ${baseColor};
    padding: 1rem;
    margin: 1rem;
    box-shadow: ${baseColor} 0px 0px 4px
`