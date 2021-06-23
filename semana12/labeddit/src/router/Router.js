import React from "react"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Feed from "../pages/Feed"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Post from "../pages/Post"
import Header from "../components/header/Header"

const Router = () => {
    return(

        <BrowserRouter>
                <Header/>
            <Switch>

                <Route exact path="/" >
                    <Feed />
                </Route>

                <Route exact path = "/login">
                    <Login/>
                </Route>

                <Route exact path = "/register">
                    <Register/>
                </Route>

                <Route exact path = "/post/:id">
                    <Post/>
                </Route>
                <Route>
                    <h1>oi</h1>
                </Route>
            </Switch>
        </BrowserRouter>


    )
}

export default Router