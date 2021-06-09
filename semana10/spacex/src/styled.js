import styled from "styled-components"
import { baseColor, primaryColor } from "./constants/colors"

export const Main = styled.div`
    width: 100vw;
    height:100vh;

    display:flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${primaryColor};

    h1{
        color: ${baseColor}
    }

`