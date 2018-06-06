import React from 'react';
import NavBarItem from './NavBarItem';

export default ({lang}) => 
  <div style={Styles.navBar}>
    <NavBarItem text="logo" url={'/lang/'+lang} style={Styles.logo} />
    <NavBarItem text="Menu-1" url={`/menu/${lang}/1`} />
    <NavBarItem text="Menu-2" url={`/menu/${lang}/2`} />
    <NavBarItem text="Menu-3" url={`/menu/${lang}/3`} />
    <NavBarItem text="Menu-4" url={`/menu/${lang}/4`} />
    <NavBarItem text="Menu-5" url={`/menu/${lang}/5`} />
    <NavBarItem text="Menu-6" url={`/menu/${lang}/6`} />
  </div>

const Styles = {
  logo: {
    color: 'red',
    borderWidth: 1,
  },
  navBar: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
  },
}