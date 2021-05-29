import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registeredcustomers from './pages/Registeredcustomers';
import './App.css';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/customers" component={Registeredcustomers} />
          <Route exact path="/registerNewUser" component={Register} />
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
