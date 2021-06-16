import styled from "styled-components"
import { baseColor, complementColor, complementColorDark, secondaryColor } from "../../constants/colors"

export const Card = styled.div(({customStyle}) =>`
    background-color: ${baseColor};
    padding: 1rem;
    margin: 1rem;
    box-shadow: ${baseColor} 0px 0px 4px;
    display:flex;
    flex-direction: ${customStyle === "admin" ? "row;":"column;"};
    justify-content:  ${customStyle === "admin" ? "space-between;":"flex-start;"} ;
    align-items:center;

    a{
        color: ${complementColor};

        :hover{
            color: ${complementColorDark};
            cursor:pointer;
        }
    }

    h2{
        text-align: ${customStyle !== "admin" ? "center":""};
        width: 50%;
    }

    button{
        background-color: ${secondaryColor};
    }
`
)