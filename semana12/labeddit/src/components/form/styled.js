import styled from "styled-components";
import { contrast, Option, secondary, white } from "../../constants/color";

export const Input = styled.input`
    background-color: ${white};
    border:none;

    :focus{
        box-shadow: 0  0 3px ${secondary}, inset 0 0 3px ${Option};
        outline: none;
    }

`