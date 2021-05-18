import axios from "axios"
import React from "react"




export default class Usuarios extends React.Component{



    componentDidMount(){
        this.props.lista()
    }


    render(){
        const  listaUsuarios = this.props.listaUsuarios.map((user) => {
            return(
                <li key = {user.id}>
                    {user.name}
                    <button>Apagar</button>
                </li>
            )
        })
        return(
            <div>
                <h1>Usuario</h1>
                {listaUsuarios}
            </div>
        )
    }
}