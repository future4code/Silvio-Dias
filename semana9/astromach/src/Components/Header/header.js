import styled from "styled-components"
import Love from "../Img/love.svg"
import Mail from "../Img/mail.svg"

const HeaderDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    height: 10%;
    width: 90%;
    margin: 1rem 2rem;
`

const ImgLogo = styled.img`
    width: 50%;
`

const ButtonHeader = styled.img`
    height:50px;

    :hover{
        cursor:pointer;
    }
`
const Header = (props) => {

    const iconHeader = () =>{
        if(props.checkPage === "Card"){
            return {Mail}
        }
        return {Love}
    }

    return(
        <HeaderDiv>
                <a onClick = {props.checkPage === "Card" ? (() => props.page('Match')):
                (() => props.page('Card'))}>
                    
                    <ButtonHeader src = {props.checkPage === "Card" ? Mail:Love}/>
                    
                </a>

        </HeaderDiv>

    )
}

export default Header