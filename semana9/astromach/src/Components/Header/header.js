import Love from "../Img/love.svg"
import Mail from "../Img/mail.svg"
import { HeaderDiv,ButtonHeader } from "./style"

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