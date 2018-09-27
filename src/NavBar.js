import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

import AboutPage from './components/AboutPage'


const NavBar = props => {

  return(
    <Menu>
      <NavLink exact to="/">
        <Menu.Item  icon='jenkins'/>
      </NavLink>

      <NavLink activeClassName="ui active item" className="ui item" to="/about">
        <h3 className="ui header">About</h3>
      </NavLink>
    </Menu>
  )
}

export default NavBar
