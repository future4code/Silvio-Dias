import styled from 'styled-components'

export const ProfilePage = styled.div`
    height: 90%;
`

export const LoadingArea = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;

`

export const PhotoProfile = styled.div`
    width: 350px;
    height: 550px;

    border-radius: 3%;

    background-size: cover;
    background-position:center;

    display:flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-bottom: 1rem;
    transition: 0.3s;
    box-shadow: 0px 0px 6px black;
    box-shadow: inset 0px -260px 127px -107px rgb(0 0 0 / 75%);

    transform: ${props => props.rotate && props.rotate[0] ?
      (props.rotate[1] === "cancel" ? "rotate(-7deg)":"rotate(7deg)"): ""};

    h1{
        margin:0
    }

`

export const Description = styled.div`
    display:block;
    padding: 1rem;
    color:white;
    font-weight: 10px;
`

export const Bio = styled.p`
    margin: 0;
`

export const NameAge = styled.div`
    display: flex;
`

export const OverMatch = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        border: solid 3px  #B54B46;
        height:50px;
        width: 100%;
        border-radius: 3%;
        font-size: large;
        font-weight:bolder;

    }

    a:hover{
        background-color: #B54B46;
        color:white;
        cursor:pointer;
    }
`



export const ButtonArea = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    gap: 25%;
    padding: 0 4rem;
    margin-top: 2rem;
`

export const ButtonProfile = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    border: solid 1px ${props => props.heart? "#00CA79":"#D8524A"} ;
    width: 70px;
    height:70px;
    transition: 0.3s;

    font-size: 50px;
    color:${props => props.heart? "#00CA79":"#D8524A"};

    transition: 0.3s;

    &:hover{
        background-color:${props => props.heart? "#00b56f":"#B54B46"};
        cursor: pointer;
        font-size: 60px;
        color:white;
    }
`