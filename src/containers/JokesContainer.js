import React from 'react'
import {Container, Header, Grid, Segment} from 'semantic-ui-react'
import Joke from '../components/Joke'

class JokesContainer extends React.Component {
  render() {
    console.log(this.props.userJokes)
    return(
      <React.Fragment>
        <Container>
          <Header>
          My Joke List
          </Header>
          <Grid columns={1}>
            {this.props.userJokes ? this.props.userJokes.map(joke =>
              <Joke currentJoke={joke}/>) : null}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default JokesContainer
