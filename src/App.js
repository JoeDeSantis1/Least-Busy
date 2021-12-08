import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';

const App = () => {

  return (
    <div>
      <Router> 
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
