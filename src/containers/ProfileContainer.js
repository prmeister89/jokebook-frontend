import React from 'react'

import UserContainer from './UserContainer'
import JokesContainer from './JokesContainer'

class ProfileContainer extends React.Component {

  render() {
    return(
      <React.Fragment>
        <UserContainer user={this.props.user}/>
      </React.Fragment>
    )
  }
}

export default ProfileContainer;


// <UserContainer />
// <JokesContainer />
