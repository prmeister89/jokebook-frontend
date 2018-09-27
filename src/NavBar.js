import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

//Functional Component, links to different render pages
const NavBar = props => {

  return(
    <Menu>
      <NavLink exact to="/">
        <Menu.Item  icon='jenkins'/>
      </NavLink>

      <NavLink to="/profile">
        <Menu.Item>Profile</Menu.Item>
      </NavLink>

      <NavLink to="/about">
        <Menu.Item>About</Menu.Item>
      </NavLink>

      <NavLink to="/login">
        <Menu.Item>Log-In</Menu.Item>
      </NavLink>

      <NavLink to="/signup">
        <Menu.Item>Sign-Up</Menu.Item>
      </NavLink>


    </Menu>
  )
}

export default NavBar
