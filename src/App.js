import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      language: 'ID',
    };
  }
  
  _toggleLanguage = e => {
    this.setState({language: (this.state.language === 'ID') ? 'EN' : 'ID'})
  }

  render() {
    return (
      <BrowserRouter>
        <div id="page-wrapper">
          <header>
            <TopBar language={this.state.language} toggleClick={this._toggleLanguage} />
            <NavBar lang={this.state.language} />
          </header>
          <main className="container valign-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu/:lang/:id" component={Menu} />
              <Route path="/login/:lang" component={Login} />
              <Route path="/register/:lang" component={Register} />
              <Route path="/lang/:lang" component={Home} />
              <Route component={NotFound}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
