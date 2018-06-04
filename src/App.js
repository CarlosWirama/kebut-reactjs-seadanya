import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
import './App.css';

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      //
    };
  }

  render() {
    return (

      <BrowserRouter>
        <div >
          <header>
            <TopBar/>
            <NavBar/>
          </header>
          <div className="container">
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
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const NotFound = () => <h1 className="valign-wrapper"> 404 Page Not Found </h1>

const Home = () => <div class="valign-wrapper center-align"><h1> Content HOME </h1></div>
const Menu1 = () => <div class="valign-wrapper center-align"><h1> Content MENU-1 </h1></div>
const Menu2 = () => <div class="valign-wrapper center-align"><h1> Content MENU-2 </h1></div>
const Menu3 = () => <div class="valign-wrapper center-align"><h1> Content MENU-3 </h1></div>
const Menu4 = () => <div class="valign-wrapper center-align"><h1> Content MENU-4 </h1></div>
const Menu5 = () => <div class="valign-wrapper center-align"><h1> Content MENU-5 </h1></div>
const Menu6 = () => <div class="valign-wrapper center-align"><h1> Content MENU-6 </h1></div>
const Login = () => <div class="valign-wrapper center-align"><h1> Login </h1></div>
const Register = () => <div class="valign-wrapper center-align"><h1> Register </h1></div>

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
      <h6>What is Cat Ipsum?</h6>
      <p style={Styles.footerParagraph}>
        Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum hit you unexpectedly, yet shove bum in owner's face like camera lens. Get video posted to internet for chasing red dot cat mojo so Gate keepers of hell, or claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?. Love you, then bite you.
      </p>
    </div>
  
    <div className="col m4">
      <h6>Why do we use it?</h6>
      <p style={Styles.footerParagraph}>
        Steal the warm chair right after you get up leave fur on owners clothes my left donut is missing, as is my right. Spend six hours per day washing, but still have a crusty butthole. Gnaw the corn cob plays league of legends sit and stare, and lie in the sink all day, but stand in doorway, unwilling to chose whether to stay in or go out so meow and russian blue. Bleghbleghvomit my furball really tie the room together eat all the power cords.
      </p>
    </div>

    <div className="col m4">
      <h6>Where can I get some?</h6>
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
        <Link to="/login" className="waves-effect waves-light" {...props}>
          Login
        </Link>
        <span> / </span>
        <Link to="/register" className="waves-effect waves-light" {...props}>
          Register
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
}
