import styled from 'styled-components'



export const ImgMatch = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
`

export const MatchPage = styled.div`
    height: 90%;
    width: 100%;
    overflow: auto;

`

export const MatchArea = styled.div`
    display:flex;
    margin-bottom: 1rem;
    padding: 0.3rem;
    border: 0 0 1px 0 solid black;

    &:hover{
        background-color:white;
        cursor:pointer;
        
    }

    p{
        margin-left: 1rem;
    }
`