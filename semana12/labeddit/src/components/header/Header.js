import React from 'react'
import {goTo} from "../../router/Coordinator"
import { useHistory } from "react-router-dom";
import Logout from '../button/logout';
import { HeaderDiv,HeaderArea } from "./style"

import "./logo.scss"


function Header() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    return (
        <HeaderDiv>
                <h1 data-text = "Labeditt" class= "logo" onClick = {() => goTo(history,"/")}>Labeditt</h1>
                {token && <Logout/>}
        </HeaderDiv>
    )
}

export default Header
