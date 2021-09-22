import React,{useContext, useState} from 'react'
import { useHistory } from "react-router";
import RoutingPath from '../../../routes/RoutingPath';
import { UserContext } from '../../../shared/provider/UserProvider';

export const NavigationDesktop = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const showLogin = () => {

        if(authenticatedUser !== null) return <span>{authenticatedUser}</span>

        return (
            <button onClick = {() => history.push(RoutingPath.signInView,"Nu kan du logga in")}> Sign in</button>
        );

    };
    return (
        <nav>
            <button onClick = {() => history.push(RoutingPath.homeView,"Nu är du hemma!") } > Home</button>
            <button onClick = {() => history.push(RoutingPath.storeView,"Nu är du i butiken") } > Store</button>
            {showLogin()}
        </nav>
    );
};
