import React from "react";

export default class Cadastro extends React.Component{

    render(){
        return(
            <div>
                <h1>Cadastro</h1>
                <input
                 placeholder = "Nome"
                 onChange = {this.props.handleNome}
                />
                 <input
                 type= "email"
                 placeholder = "E-mail"
                 onChange = {this.props.handleEmail}
                />
                <button
                    onClick = {this.props.cadastrarUsuario}
                >
                    Cadastrar
                </button>
            </div>

        )
    }
}