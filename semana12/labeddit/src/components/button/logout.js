import React from 'react'

function Logout() {
    const startLogout = () => {
        localStorage.removeItem("token")
        alert("Deslogado com sucesso")
    }

    return (
        <div>
            <button onClick = {startLogout}>Logout</button>
        </div>
    )
}

export default Logout
