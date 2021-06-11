import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPage';
import AdminHomePage from '../pages/AdminHomePage';
import CreateTripPage from '../pages/CreateTripPage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import TripDetailsPage from '../pages/TripDetailsPage';
import LoginPage from '../pages/LoginPage';


function Router() {
    return (
        <BrowserRouter>
        <Switch>

            <Route exact path = "/">
                <HomePage/>
            </Route>

            <Route exact path = "/viagens">
                <ListTripsPage/>
            </Route>

            <Route exact path = "/admin">
                <AdminHomePage/>
            </Route>

            <Route exact path = "/cadastro-viagem">
                <CreateTripPage/>
            </Route>

            <Route exact path = "/cadastro-candidatura/:id">
               <ApplicationFormPage/>
            </Route>

            <Route exact path = "/detalhes-de-viagem/:id">
                <TripDetailsPage/>
            </Route>

            <Route exact path = "/login">
                <LoginPage/>
            </Route>


        </Switch>
        </BrowserRouter>
    )
}

export default Router
