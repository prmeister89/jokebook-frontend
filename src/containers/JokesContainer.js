import React from 'react'
import {Container, Header, Grid} from 'semantic-ui-react'
import Joke from '../components/Joke'

class JokesContainer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Container>
          <Header>
          My Joke List
          </Header>
          <Grid columns={1}>
            {this.props.userJokes ? this.props.userJokes.map(joke =>
              <Joke
                currentUserJokes={this.props.currentUserJokes}
                key=""
                currentJoke={joke}
                handleDeleteJoke={this.props.handleDeleteJoke}
              />) : null}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default JokesContainer
