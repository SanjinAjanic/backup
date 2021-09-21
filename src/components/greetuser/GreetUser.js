import React from 'react'
import './GreetUser.css'

export const GreetUser = (props) => {
    const showAlert = () => {
        alert("You clicked on me!")
    }
    return (
        <div className="greetuser">
        <h1 className="greetuser__header" onClick ={() => showAlert()}>
            Welcome to my page, {props.name}!
         </h1>
         <p className="error"> i am{props.age} years old </p>
         </div>
    );
};
