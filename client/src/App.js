import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Input from './components/Input';
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  // componentWillMount() {
  //   this.getChartData();
  // }

  // getChartData() {
  //   //ajax call here
  //   this.setState({
  //     chartData: 
  //   });

  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/input" component={Input} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
  );
  }
}

export default App;