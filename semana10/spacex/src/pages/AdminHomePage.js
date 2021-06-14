import React from 'react'
import Button from "../components/Buttons/Button"
import useProtectedPage from "../hooks/useProtectedPage"
import { ButtonBack}  from "../components/Buttons/ButtonBack"
import { ButtonArea } from "./style"
import AdminCard from '../components/Cards/adminCard';
import useGoTo from '../hooks/useGoTo';

function AdminHomePage() {
    const {history,goToPage} = useGoTo()

    useProtectedPage()

    const Logout = () => {
        localStorage.removeItem("token");
        history.push(`login`);
    }

    return (
        <div>
            <ButtonArea directionFlex={true}>
                <Button text = "Logout" action = {Logout}/>
                <Button action = {() => goToPage("/cadastro-viagem")} text = "Cadastrar Viagem"/>

                <ButtonBack
                h = {history}
                /> 
            </ButtonArea>
            <AdminCard/>
        </div>

    )
}

export default AdminHomePage
