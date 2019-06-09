import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
import { PrivateRoute } from './Components/PrivateRoute';
import SignIn from './Components/SignIn';
import { PublicRoute } from './Components/PublicRoute';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
