import React from "react";
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom';
import App from "../App";
import Comments from "../body/comments/comments";

const routes = (
    <Router basename={"/"}>
        <Switch>
            <Route path={"/"} render={(props)=>(<App/>)}/>
            <Route path={"/"} render={(props)=>(<Comments/>)}/>
        </Switch>
    </Router>
)


