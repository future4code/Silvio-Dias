import styled from "styled-components"
import logo from "../Img/logo.png"

const HeaderDiv = styled.div`
    display:flex;
    height: 100px;
`

const ImgLogo = styled.img`
    width: 50%;
`
const Header = (props) => {
    return(
        <HeaderDiv>
                <ImgLogo src = {logo}/>
                <button onClick = {props.checkPage === "Card" ? (() => props.page('Match')):
                (() => props.page('Card'))}>
                    
                    {props.checkPage === "Card" ? 'Match':'Card'}
                    
                </button>
        </HeaderDiv>

    )
}

export default Header