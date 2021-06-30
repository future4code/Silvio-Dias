import React from 'react'
import { useHistory } from 'react-router-dom'
import {Button} from "./style"

function Logout() {

    const history = useHistory()

    const startLogout = () => {
        localStorage.removeItem("token")
        history.push("/login")
        alert("Deslogado com sucesso")
    }

    return (
        <div>
            <Button onClick = {startLogout}>Logout</Button>
        </div>
    )
}

export default Logout
