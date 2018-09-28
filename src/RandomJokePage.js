import React, { Component } from 'react';
import {Container, Header, Button, Icon, Segment} from 'semantic-ui-react'


import Joke from './components/Joke'

class RandomJokePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as='h1' textAlign='center'>
        Welcome to JokeBook!
        </Header>
        <Container>
            <Joke
              handleClick={this.props.handleClick}
              currentJoke={this.props.currentJoke}
            />
          <Segment>
            <Button animated>
              <Button.Content visible>
                <Icon name='plus' />
              </Button.Content>
              <Button.Content hidden>
                Add Joke
              </Button.Content>
            </Button>
            <Button animated>
              <Button.Content visible>
                <Icon name='arrow right' />
              </Button.Content>
              <Button.Content hidden>
                Next
              </Button.Content>
            </Button>
          </Segment>
        </Container>
      </React.Fragment>
    );
  }
}

export default RandomJokePage;
