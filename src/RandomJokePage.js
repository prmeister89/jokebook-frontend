import React, { Component } from 'react';
import {Container, Header, Button, Icon, Segment, Card} from 'semantic-ui-react'


import Joke from './components/Joke'

class RandomJokePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as='h1' textAlign='center'>
        Welcome to JokeBook!
        </Header>

        <Card centered>
          <Card.Content>
            <Card.Description>{this.props.currentJoke.joke}</Card.Description>
          </Card.Content>

          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic animated color="green" onClick={() => this.props.handleAddJoke(this.props.currentJoke.joke)}>
                <Button.Content visible>
                  <Icon name='plus' />
                </Button.Content>
                <Button.Content hidden>
                  Add Joke
                </Button.Content>
              </Button>
              <Button basic animated color="blue" onClick={() => this.props.handleNextClick()}>
                <Button.Content visible>
                  <Icon name='arrow right' />
                </Button.Content>
                <Button.Content hidden>
                  Next
                </Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default RandomJokePage;
