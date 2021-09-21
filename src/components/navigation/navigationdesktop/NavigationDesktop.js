import React from 'react'
import { useHistory } from "react-router";
import RoutingPath from '../../../routes/RoutingPath';

export const NavigationDesktop = () => {
    const history = useHistory();
    return (
        <nav>
            <button onClick = {() => history.push(RoutingPath.homeView,"Nu är du hemma!") } > Home</button>
            <button onClick = {() => history.push(RoutingPath.storeView,"Nu är du i butiken") } > Store</button>
            <button onClick = {() => history.push(RoutingPath.signInView,"Nu kan du logga in")}> Sign in</button>
        </nav>
    )
}
