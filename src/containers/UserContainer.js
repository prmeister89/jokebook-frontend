import React, {Component} from 'react'
import UserDetails from '../components/UserDetails'
import UserForm from '../components/UserForm'

export default class UserContainer extends Component {

  render() {
    return(
      <div>
        UserContainer
        <UserDetails user={this.props.user}/>
        <UserForm />
      </div>

    )
  }
}
