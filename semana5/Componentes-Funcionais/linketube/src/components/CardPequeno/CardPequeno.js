import React from 'react';
import styled from 'styled-components';

const Smallcard = styled.div `
    display: flex;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 5px;
    height: 50px;
    align-items: flex-start;
`

const  IndiceInfo = styled.h4 `
    margin-right: 10px;
`

const ImgP = styled.div `
img{
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
}
`

function CardPequeno(props){
    return(
        <Smallcard className = "smallcard-container">
            <ImgP><img src = {props.imagemPequena} /></ImgP>
            <IndiceInfo>{props.IndiceInfo}</IndiceInfo>
            <p>{props.info}</p>
        </Smallcard>
    )
}

export default CardPequeno;