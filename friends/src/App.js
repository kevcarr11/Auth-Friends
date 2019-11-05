import React from 'react';
import { Route, NavLink, withRouter } from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute"
import './App.css';
import Login from "./components/login";
import Logout from "./components/Logout"
import Home from "./components/Home"
import FriendsList from "./components/FriendsList"
import { getToken } from "./utils/AuthWithAxios"

function App() {
  const loggedIn = getToken()
  return (
    <div className="App wrapper">
      <nav>
        <NavLink exact activeClassName="selected" className="link" to="/">Home</NavLink>
        {!loggedIn && <NavLink className="link" activeClassName="selected" to="/login">Login</NavLink>}
        {loggedIn && <NavLink className="link" activeClassName="selected" to="/friends">My Friends</NavLink>}
        {loggedIn && <NavLink className="link" activeClassName="selected" to="/logout">Logout</NavLink>}
      </nav>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
