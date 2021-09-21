import React from 'react'
import { useLocation } from 'react-router-dom';
import { GreetUser } from "../../components/greetuser/GreetUser";
// import {ErrorButton} from '../../components/errorbutton/ErrorButton';
export const HomeView = () => {
const location = useLocation()    
    return (
        <div>
            <h1>You are in the Homeview</h1>
            <GreetUser name="dotNet20D" age="1"/>
            <p>
                {location.state}
            </p>
  
            {/* <ErrorButton></ErrorButton> */}
        </div>
    );
};
