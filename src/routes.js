import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from './pages/Landing/Landing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
}