import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Profile from './components/Profile';

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
