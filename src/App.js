import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Here, you would typically validate the username and password
    // against a database or other data store.
    // For the purposes of this example, we'll assume that the username
    // and password are both "admin".
    if (username === "manvisundli98@gmail.com" && password === "admin") {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  };

  // Check if the user is already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

 
  return (
    <>  
    <div>
      {isLoggedIn ? (
      <div>
          <p className="welcome">Welcome, {localStorage.getItem("username")}!</p>
          <button onClick={handleLogout}>Log out</button>
      </div>
      ) : (
    <div className="logo-box">
      <div>
      <img src="./twitter.png" alt="apple" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src="./google.png" alt="apple" />
        Sign in with Google
      </button>
      <button>
        <img src="./apple.png" alt="apple" />
        Sign in with Google
      </button>
      <hr></hr>
      <span>Or</span>
    </div>
        <form onSubmit={handleLogin}>
          <label>Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Log in</button>
        </form>
        <button>Forget Password</button>
        <p>
          Don't Have an account<a href=" ">Sign up</a>
        </p>
        
      </div>
      )}
      </div>
    </>
  );
  }
export default App;