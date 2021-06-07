import React from 'react'

import styled from "styled-components"

const MainButton = styled.div`
    background-color:red;
    border-radius: 3%;

    &:hover{
        background-color:blue;
    }
` 

function HomePage() {
    return (
        <div>
            <h1>Space S</h1>
            <MainButton>
                Viagens
            </MainButton>
            <MainButton>
                Área de Administração
            </MainButton>

        </div>
    )
}

export default HomePage
