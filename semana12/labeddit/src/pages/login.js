import React from 'react'
import ScreenLogin from "../screens/screenLogin"
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory()

    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }

    return (
        <div>
            <ScreenLogin/>
        </div>
    )
}

export default Login
