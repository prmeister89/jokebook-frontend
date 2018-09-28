import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react'


import Joke from './components/Joke'

class RandomJokePage extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>
          Welcome to JokeBook!
        </Header>
          <Joke
            handleClick={this.props.handleClick}
            currentJoke={this.props.currentJoke}
          />
      </Container>
    );
  }
}

export default RandomJokePage;
