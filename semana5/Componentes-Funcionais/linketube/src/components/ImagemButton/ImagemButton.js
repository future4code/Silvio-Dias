    import React from "react"
    import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`  

const ImgButton = styled.div`
img{
    width: 30px;
    margin-right: 10px;
}
`

function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ImgButton><img src={ props.imagem }/></ImgButton>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

export default ImagemButton;