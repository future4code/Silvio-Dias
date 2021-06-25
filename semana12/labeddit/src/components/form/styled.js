import styled from "styled-components";
import { basic, contrast, Option, secondary, white } from "../../constants/color";

export const Input = styled.input`
    background-color: ${white};
    border:none;
    height:2rem;
    padding:0.5rem;
    border-radius: 4%;

    :focus{
        box-shadow: 0  0 3px ${secondary}, inset 0 0 3px ${Option};
        outline: none;
    }

`

export const FormLog = styled.form`
    display:flex;
    flex-direction: column;
    
    input{
        margin-bottom: 1rem;
        background-color: ${basic};
        color: ${white};

        
    }

    ::placeholder{
        color:${basic}
    }


`