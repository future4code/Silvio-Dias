import React from 'react'
import {goTo} from "../../router/Coordinator"
import { useHistory } from "react-router-dom";
import Logout from '../button/logout';


function Header() {
    const history = useHistory();
    return (
        <div>
            <h1 onClick = {() => goTo(history,"/")}>Labeditt</h1>
            <Logout/>
        </div>
    )
}

export default Header
