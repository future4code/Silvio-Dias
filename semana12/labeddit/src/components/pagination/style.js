import styled from "styled-components";
import { secondary, white } from "../../constants/color";

export const PageButton = styled.button`
    background: none;
    color: ${white};
    font-size: x-large;
    outline:none;
    border:none;
    margin-right:1rem;

    :hover{
        cursor:pointer;
        color: ${secondary};
    }
`