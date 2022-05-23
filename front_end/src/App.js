import React, { Component } from 'react';
import "./Assets/style/app.css";
import {Route , Switch} from "react-router-dom";

import Login from './Components/Login';
import VehicleForm from './Components/VehicleForm';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/VehicleForm" component={VehicleForm} />
        </Switch>
      </>
    );
  }
}

export default App;