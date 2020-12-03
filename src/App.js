import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
