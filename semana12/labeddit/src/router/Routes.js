import { BrowserRouter,Route,Switch } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/">
                    
                </Route>

                <Route exact path = "/login">

                </Route>

                <Route exact path = "/register">
                    
                </Route>

                <Route exact path = "/post/:id">
                    
                </Route>
            </Switch>
        </BrowserRouter>


    )
}

export default Routes