import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
` 
const BigCardImg = styled.div`

img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
} 
` 
const BigCardname = styled.h4`
    margin-bottom: 15px;
`
const Detalhes = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Descricao = styled.p

function CardGrande(props) {
    return (
        <BigCard>
           <BigCardImg><img src={ props.imagem } /></BigCardImg> 
            <Detalhes>
                <BigCardname>{ props.nome }</BigCardname>
                <p>{ props.descricao }</p>
            </Detalhes>
        </BigCard>
    )
}

export default CardGrande;