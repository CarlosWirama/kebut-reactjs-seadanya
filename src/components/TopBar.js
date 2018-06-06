import React from 'react';
import { Link } from "react-router-dom";

export default props => (
  <div style={Styles.topbar}>
    <div className="container">
      <div className="row">
        <div className="col s6 m2 offset-m7 offset-l8" style={Styles.languageMenu} onClick={props.toggleClick}>
          {props.language==='EN' ? 'Language' : 'Bahasa'}&nbsp;&nbsp;|&nbsp;&nbsp;{props.language}
        </div>
        <div className="col s6 m3 l2">
          <Link to="/login" className="waves-effect waves-light" {...props}>
            {props.language==='EN' ? 'Login' : 'Masuk'}
          </Link>
          <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <Link to="/register" className="waves-effect waves-light" {...props}>
            {props.language==='EN' ? 'Register' : 'Daftar'}
          </Link>
        </div>
      </div>
    </div>
    <div style={{clear:'both'}}/>
  </div>
)

const Styles = {
  topbar: {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
  },
  languageMenu: {
    // marginRight: 40,
    color: 'white',
    display: 'inline'
  },
}