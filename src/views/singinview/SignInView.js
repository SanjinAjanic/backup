import { useState, useContext } from 'react'
import { UserContext } from "../../shared/provider/UserProvider";
import { useHistory } from 'react-router';
import RoutingPath from '../../routes/RoutingPath';


export const SignInView = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logIn = () =>{
        setAuthenticatedUser(username);
        history.push(RoutingPath.homeView, );
    };

    return (
        <div>
            <h1>You are in the SignInView</h1>
            <h2> {username} </h2>
            <input
             placeholder="Enter username"  
             onChange = {(event) => setUsername(event.target.value)}
            ></input>{" "} 
            <br/>  
            <input type="password" 
            placeholder="Enter password"
            onChange = {(event) => setPassword(event.target.value)}
            ></input>{" "} 
            <br/>
            <button onClick={logIn}>Log in</button>
           
    
        </div>
    )
}
