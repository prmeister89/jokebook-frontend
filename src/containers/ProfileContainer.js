import React from 'react'
import {Grid} from 'semantic-ui-react'

import UserContainer from './UserContainer'
import JokesContainer from './JokesContainer'

class ProfileContainer extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Grid columns={2}>
          <Grid.Column>
            <UserContainer
            userInfo={this.props.userInfo}
            user={this.props.user}/>
          </Grid.Column>
          <Grid.Column>
            <JokesContainer
              userInfo={this.props.userInfo}
              currentUserJokes={this.props.currentUserJokes}
              user={this.props.user}
              userJokes={this.props.userJokes}
              handleDeleteJoke={this.props.handleDeleteJoke}
            />
          </Grid.Column>

        </Grid>
      </React.Fragment>
    )
  }
}

export default ProfileContainer;


// <UserContainer />
// <JokesContainer />
