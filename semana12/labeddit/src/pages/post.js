import React from 'react'
import ScreenPost from "../screens/screenPost"
import { useHistory } from "react-router-dom";

function Post() {
    const history = useHistory()

    const token = localStorage.getItem("token");
    if (!token) {
        history.push("/login");
    }

    return (
        <div>
            <ScreenPost/>
        </div>
    )
}

export default Post
