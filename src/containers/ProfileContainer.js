import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'

import UserContainer from './UserContainer'
import JokesContainer from './JokesContainer'

class ProfileContainer extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Grid columns={2}>
          <Grid.Column>
            <UserContainer user={this.props.user}/>
          </Grid.Column>
          <Grid.Column>
            <JokesContainer
              user={this.props.user}
              userJokes={this.props.userJokes}
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
