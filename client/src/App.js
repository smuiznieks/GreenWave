import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Events from './pages/Events';
import HomePage from './pages/HomePage';
import Locations from './pages/Locations';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Navigation from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/locations' component={Locations} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;