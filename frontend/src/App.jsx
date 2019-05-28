import React, { Component } from 'react';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler = (event, data) => {
    console.log(event.target.type, data);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Register}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/admin' component={Dashboard}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
