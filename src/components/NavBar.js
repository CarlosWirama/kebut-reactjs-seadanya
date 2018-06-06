import React from 'react';
import NavBarItem from './NavBarItem';

export default () => (
  <div style={Styles.navBar}>
    <NavBarItem text="logo" url="/" style={Styles.logo} />
    <NavBarItem text="Menu-1" url="/menu/1" />
    <NavBarItem text="Menu-2" url="/menu/2" />
    <NavBarItem text="Menu-3" url="/menu/3" />
    <NavBarItem text="Menu-4" url="/menu/4" />
    <NavBarItem text="Menu-5" url="/menu/5" />
    <NavBarItem text="Menu-6" url="/menu/6" />
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
}