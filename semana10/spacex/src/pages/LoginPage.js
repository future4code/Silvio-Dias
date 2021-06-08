import React from 'react'
import useInput from '../hooks/useInput'



function LoginPage() {
    const history = useHistory()
    
    const [login, setLogin] = useInput('')
    const [senha,setSenha] = useInput('')

    return (
        <div>
            <h1>Login</h1>
            <input placeholder = "Nome" type = "text" onChange = {setLogin}/>
            <input placeholder = "Nome" type = "password" onChange = {setSenha}/>
            <button>Imprimir</button>
            <Button text = "Voltar" action = {() => goToBack(history)}/>
        </div>
    )
}

export default LoginPage
