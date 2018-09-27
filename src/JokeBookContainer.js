import React, { Component } from 'react';

import Joke from './components/Joke'

class JokeBookContainer extends Component {
  render() {
    return (
      <div>
        <Joke
          handleClick={this.props.handleClick}
          currentJoke={this.props.currentJoke}
        />
      </div>
    );
  }
}

export default JokeBookContainer;
