import React from 'react'
import {Button} from "./style"

function Logout() {
    const startLogout = () => {
        localStorage.removeItem("token")
        alert("Deslogado com sucesso")
    }

    return (
        <div>
            <Button onClick = {startLogout}>Logout</Button>
        </div>
    )
}

export default Logout
