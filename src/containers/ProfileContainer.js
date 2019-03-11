import React from 'react'
import {Grid, Dimmer, Loader, Segment} from 'semantic-ui-react'

import UserContainer from './UserContainer'
import JokesContainer from './JokesContainer'

class ProfileContainer extends React.Component {

  render() {
    console.log("props:", this.props)
    // if (!!this.state.loading) {
    //   return (
    //     <div>
    //       <Segment>
    //         <Dimmer active>
    //           <Loader content="Loading..." />
    //         </Dimmer>
    //       </Segment>
    //     </div>
    //   )
    // }
    return(
      <React.Fragment>
        <Grid columns={2}>
          <Grid.Column>
            <UserContainer
            userInfo={this.props.userInfo}
            handleUpdateUserBio={this.props.handleUpdateUserBio}
            isUpdateModalOpen={this.props.isUpdateModalOpen}
            openUpdateModal={this.props.openUpdateModal}
            closeUpdateModal={this.props.closeUpdateModal}
            />
          </Grid.Column>

          <Grid.Column>
            <JokesContainer
              userInfo={this.props.userInfo}
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
