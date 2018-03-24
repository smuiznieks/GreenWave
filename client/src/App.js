import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Events';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/Events' component={Events} />
        <Route exact path='/Locations' component={Locations} />
      </Switch>
    </div>
  </Router>
);

export default App;