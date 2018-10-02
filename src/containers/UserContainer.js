import React, {Component} from 'react'
import UserDetails from '../components/UserDetails'
import UserForm from '../components/UserForm'
import {Grid} from 'semantic-ui-react'

export default class UserContainer extends Component {

  render() {
    return(
      <Grid columns={1}>
        <Grid.Column>
          <UserDetails
          userInfo={this.props.userInfo}
          user={this.props.user}/>
        </Grid.Column>
        <Grid.Column>
          <UserForm />
        </Grid.Column>
      </Grid>

    )
  }
}
