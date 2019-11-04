import React from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Login from "./components/login";
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/friends">My Friends</Link>
      </nav>
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
