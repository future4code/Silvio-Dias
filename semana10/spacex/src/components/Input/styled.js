import styled from "styled-components"
import { baseColor, primaryColor, secondaryColor } from "../../constants/colors"

export const AreaForm = styled.form`
    display:flex;
    flex-direction: column;

    input,select{
        border: none;
        margin: 1rem;
        font-size: x-large;
        background: none;
        color:${baseColor};
        border-bottom: 3px solid ${secondaryColor};
        padding: 0.5rem;
        transition: 0.5s;

        :focus{
            outline: none;
            border-bottom: 3px solid ${baseColor};
        }


        ::placeholder{
            color: ${baseColor}
        }

        ::-webkit-calendar-picker-indicator{
           display: none;
        }

    }

    option{
      background-color: ${baseColor};
      color: ${primaryColor}
    }
`


