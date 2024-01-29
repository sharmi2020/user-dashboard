import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Login.css';
import logo from '../../Assets/images.png';


const Login = () => {

const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
let navigate=useNavigate();

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

// JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      
      {/* button on click to navigate to the next page */}
      <div className="button-container">
        <input type="submit" 
        onClick={()=>{
            navigate('/Dashboard')
        }}
        />
      </div>
    </form>
  </div>
);

return (
  <div className="app">
    <div className="login-form">
        <img src={logo} className="logo"alt=""/>
      <div className="title">LOGIN</div>
       {isSubmitted ? <div>User is successfully logged in</div> : renderForm} 
    </div>
  </div>
);
}


export default Login