import React, {useContext} from 'react'
import RegisterForm from '../components/form/RegisterForm'
import axios from "axios"
import { BASE_URL } from '../constants/url'
import { FormCard, Titulo } from './style'
import { useHistory } from 'react-router-dom'
import { GlobalStateContext } from '../globalstate/GlobalStateContext';

function ScreenRegister() {
    const {setStart} = useContext(GlobalStateContext)
    const history = useHistory()

    const register = (form) => {
         axios
        .post(`${BASE_URL}/users/signup`,form)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            setStart(true)
            history.push("/")
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }
    return (
        <div>
            <Titulo class="titulo">Cadastro</Titulo>
            <FormCard>
                <RegisterForm
                register = {register}
                
                />
            </FormCard>

        </div>
    )
}

export default ScreenRegister
