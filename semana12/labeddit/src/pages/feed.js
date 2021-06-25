import React from 'react'
import ScreenFeed from '../screens/screenFeed'
import { useHistory } from "react-router-dom";
import Pagination from '../components/pagination/Pagination';

function Feed() {

    const history = useHistory()

    const token = localStorage.getItem("token");
    if (!token) {
        history.push("/login");
    }

    return (
        <div>
            <ScreenFeed/>
            <Pagination/>
        </div>
    )
}

export default Feed
