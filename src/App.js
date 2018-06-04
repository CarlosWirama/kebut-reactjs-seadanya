import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
import './App.css';

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      language: 'ID',
    };
  }
  
  _toggleLanguage = () =>
    this.setState({language: (this.state.language === 'ID') ? 'EN' : 'ID'})

  render() {
    return (
      <BrowserRouter>
        <div id="page-wrapper">
          <header>
            <TopBar language={this.state.language} onClick={this._toggleLanguage} />
            <NavBar/>
          </header>
          <main className="container valign-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu1" component={Menu1} />
              <Route path="/menu2" component={Menu2} />
              <Route path="/menu3" component={Menu3} />
              <Route path="/menu4" component={Menu4} />
              <Route path="/menu5" component={Menu5} />
              <Route path="/menu6" component={Menu6} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const NotFound = () => <h1> 404 Page Not Found </h1>

const Home = () => <h1> Content HOME </h1>
const Menu1 = () => <h1> Content MENU-1 </h1>
const Menu2 = () => <h1> Content MENU-2 </h1>
const Menu3 = () => <h1> Content MENU-3 </h1>
const Menu4 = () => <h1> Content MENU-4 </h1>
const Menu5 = () => <h1> Content MENU-5 </h1>
const Menu6 = () => <h1> Content MENU-6 </h1>
const Login = () => <h1> Login </h1>
const Register = () => <h1> Register </h1>

const NavBar = props => (
  <div style={Styles.navBar}>
    <NavBarItem text="logo" url="/" style={Styles.logo} />
    <NavBarItem text="Menu-1" url="/menu1" />
    <NavBarItem text="Menu-2" url="/menu2" />
    <NavBarItem text="Menu-3" url="/menu3" />
    <NavBarItem text="Menu-4" url="/menu4" />
    <NavBarItem text="Menu-5" url="/menu5" />
    <NavBarItem text="Menu-6" url="/menu6" />
  </div>
)

const NavBarItem = props => (
  <Link to={props.url} className="waves-effect waves-light btn" {...props}>
    {props.text}
  </Link>
)

const Footer = props => (
  <footer style={Styles.footerContainer} className="row">
  
    <div className="col m4">
      <h6><b>What is Cat Ipsum?</b></h6>
      <p style={Styles.footerParagraph}>
        Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum hit you unexpectedly, yet shove bum in owner's face like camera lens. Get video posted to internet for chasing red dot cat mojo so Gate keepers of hell, or claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?. Love you, then bite you.
      </p>
    </div>
  
    <div className="col m4">
      <h6><b>Why do we use it?</b></h6>
      <p style={Styles.footerParagraph}>
        Steal the warm chair right after you get up leave fur on owners clothes my left donut is missing, as is my right. Spend six hours per day washing, but still have a crusty butthole. Gnaw the corn cob plays league of legends sit and stare, and lie in the sink all day, but stand in doorway, unwilling to chose whether to stay in or go out so meow and russian blue. Bleghbleghvomit my furball really tie the room together eat all the power cords.
      </p>
    </div>

    <div className="col m4">
      <h6><b>Where can I get some?</b></h6>
      <a href="http://www.catipsum.com" target="_blank">
        Link
      </a><br/>
      <a href="https://google.com" target="_blank">
        Link
      </a><br/>
      <a href="https://youtube.com" target="_blank">
        Link
      </a><br/>
      <a href="https://instagram.com" target="_blank">
        Link
      </a><br/>
    </div>
  </footer>
)

const TopBar = props => (
  <div style={Styles.topbar}>
    <div className="container">
      <div className="right">
        <div style={Styles.languageMenu} onClick={props.onClick}>
          {props.language==='EN' ? 'Language' : 'Bahasa'}&nbsp;&nbsp;|&nbsp;&nbsp;{props.language}
        </div>
        <Link to="/login" className="waves-effect waves-light" {...props}>
          {props.language==='EN' ? 'Login' : 'Masuk'}
        </Link>
        <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <Link to="/register" className="waves-effect waves-light" {...props}>
          {props.language==='EN' ? 'Register' : 'Daftar'}
        </Link>
      </div>
    </div>
    <div style={{clear:'both'}}/>
  </div>
)

const Styles = {
  logo: {
    color: 'red',
    borderWidth: 1,
  },
  navBar: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
  },
  footerContainer: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    padding: 20,
  },
  footerParagraph: {
    fontSize: '10pt',
  },
  topbar: {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
  },
  languageMenu: {
    marginRight: 40,
    color: 'white',
    display: 'inline'
  },
}
