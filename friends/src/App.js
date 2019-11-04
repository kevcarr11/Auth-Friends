import React from 'react';
import { Route, Link } from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute"
import './App.css';
import Login from "./components/login";
import Logout from "./components/Logout"
import FriendsList from "./components/FriendsList"
import getToken from "./utils/AuthWithAxios"

function App() {
  const loggedIn = getToken()
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {!loggedIn && <Link to="/login">Login</Link>}
        {loggedIn && <Link to="/friends">My Friends</Link>}
        {loggedIn && <Link to="/logout">Logout</Link>}
      </nav>
      
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
