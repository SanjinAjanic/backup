import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from '../views/singinview/SignInView';
import { StoreView } from '../views/storeview/StoreView';
import RoutingPath from './RoutingPath';

export const Routes = ({children}) => {
    return(
        <Router basename="sanjinreactapp/" >
            {children}
            <Switch>
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route exact path={RoutingPath.storeView} component={StoreView} />
                <Route path={RoutingPath.homeView} component={HomeView} />
            </Switch>

        </Router>
    );
};

