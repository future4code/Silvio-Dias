import styled from "styled-components";

    export const FlipCard = styled.div`
        background: none;
        width: fit-content;
        perspective: 1000px;
        margin: 1rem;
    `

    export const InnerCard = styled.div`
        position: relative;
        transition: transform 0.6s;

    `

    export const CardFront = styled.div`
        position: absolute;
        height:100%;  
        backface-visibility: hidden;
        

    `

    export const TarotImg = styled.img`
        height: 100%;
        margin:1rem;

    `

    export const TarotBack = styled.img`
        margin: 1rem;
        :hover{
            cursor:pointer
        }
    `

    export const CardBack = styled.div`
        transform: rotateY(180deg); 
        backface-visibility: hidden; 



    `