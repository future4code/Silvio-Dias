import styled from 'styled-components'

export const ProfilePage = styled.div`
    height: 90%;
`

export const PhotoProfile = styled.div`
    width: 300px;
    height: 500px;

    border-radius: 3%;

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
        margin: 0;
    }

`

export const NameAge = styled.div`
    display: flex;
`
export const BtnTest = styled.div`

    
`

export const ButtonArea = styled.div`
   display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  gap: 25%;
`

export const ButtonMatch = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    border: solid 1px green;
    width: 90px;
    height:90px;
    transition: 0.3s;

    &:hover{
        background-color:green;
        color:white;
        height:100px;
        width:100px;
        cursor: pointer;
    }
`
export const HeartMatch = styled.span`
    font-size: 80px;
    color:green;

    transition: 0.3s;

    &:hover{
        color:white;
    }

`
export const ButtonCancel = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    border: solid 1px red;
    width: 90px;
    height:90px;
    transition: 0.3s;

    &:hover{
        background-color:red;
        height:100px;
        width:100px;
        cursor: pointer;
    }
`
export const CancelMatch = styled.span`
    font-size: 80px;
    color:red;

    &:hover{
        color:white;
    }

`