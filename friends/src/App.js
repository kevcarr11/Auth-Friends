import React from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
