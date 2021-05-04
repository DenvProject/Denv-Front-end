import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Disease from "./pages/Disease/Disease";

import Diseases from "./pages/Diseases/Diseases";
import LandingPage from './pages/Landing/Landing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/diseases" component={Diseases} />
                <Route path="/disease/:name" component={Disease} />
            </Switch>
        </BrowserRouter>
    );
}