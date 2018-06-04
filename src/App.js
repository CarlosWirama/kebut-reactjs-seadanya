import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from './pages/Home';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const Home = () => <div> 404 Page Not Found </div>
const NotFound = () => <div> 404 Page Not Found </div>
