import React,{useContext, useState} from 'react'
import { useHistory } from "react-router";
import RoutingPath from '../../../routes/RoutingPath';
import { UserContext } from '../../../shared/provider/UserProvider';
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const showLogin = () => {

        if(authenticatedUser !== null) 
        return( <span className="navbar_login_desktop">{authenticatedUser}</span>
        );

        return (
            <button className="navbar_login_desktop" 
            onClick = {() => history.push(RoutingPath.signInView,"Nu kan du logga in")}> Sign in</button>
        );

    };

    return (
        <nav className="navbar_desktop">
            <span className="navbar_logo_desktop"><img src="http://ones.flatheme.net/assets/images/client-2.png"/></span> {/*Lägg in bild på min logga här*/}
            <ul className="navbar_list_desktop">
                <li>
            <button onClick = {() => history.push(RoutingPath.homeView,"Nu är du hemma!") } > Home</button>
            </li>
            <li>
            <button onClick = {() => history.push(RoutingPath.storeView,"Nu är du i butiken") } > Store</button>
            </li>
            </ul>
            {showLogin()}
        </nav>
    
    );
};
