import React from 'react'
import ScreenFeed from '../screens/screenFeed'
import { useHistory } from "react-router-dom";
import Pagination from '../components/pagination/Pagination';
import { PaginationArea } from './style';

function Feed() {

    const history = useHistory()

    const token = localStorage.getItem("token");
    if (!token) {
        history.push("/login");
    }

    return (
        <div>
            <ScreenFeed/>
            {localStorage.getItem("token") && (

                <PaginationArea>
                    <Pagination/>
                </PaginationArea>

            )}


        </div>
    )
}

export default Feed
