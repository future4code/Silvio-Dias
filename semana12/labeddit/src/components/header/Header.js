import React from 'react'
import {goTo} from "../../router/Coordinator"
import { useHistory } from "react-router-dom";


function Header() {
    const history = useHistory();
    return (
        <div>
            <button
            onClick = {() => goTo(history,"/")}
            > 
                Home
            </button>
        </div>
    )
}

export default Header
