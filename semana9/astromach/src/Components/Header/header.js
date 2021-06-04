import styled from "styled-components"
import Love from "../Img/love.svg"
import Mail from "../Img/mail.svg"

const HeaderDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    height: 4%;
    width: 90%;
    margin-bottom: 1rem;
`

const ButtonHeader = styled.img`
    height:40px;

    :hover{
        cursor:pointer;
    }
`
const Header = (props) => {

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