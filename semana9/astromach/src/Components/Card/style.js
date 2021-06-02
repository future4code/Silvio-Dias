import styled from 'styled-components'

export const PhotoProfile = styled.div`
    width: 300px;
    height: 400px;

    background-size: cover;
    background-position:center;
    color: white;

    display:flex;
    flex-direction: column;
    justify-content: flex-end;


    box-shadow: inset 0px -116px 20px rgb(0 0 0 / 57%);

    padding: 1rem;
    margin-bottom: 1rem;

    h1{
        margin: 0
    }

`

export const NameAge = styled.div`
    display: flex;
`

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    a{
        font-size: 40px;

        &:hover{
            font-size: 60px; 
        }
    }

`

export const ButtonMatch = styled.img`
    height: 40px;

    &:hover{
        height:60px
    }
`
