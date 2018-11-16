import React from 'react';
import {Card, Button, Icon, Label} from 'semantic-ui-react'


const Joke = ({ currentJoke, handleDeleteJoke }) => {
  return(
    <Card color='blue'>

      <Card.Content>
        <Card.Header>
          <Button
            floated='right'
            as='div'
            labelPosition='right'
            onClick={() => handleDeleteJoke(currentJoke)}>
            <Icon color='red' name='remove'/>
          </Button>
          <br></br>
        </Card.Header>

        <Card.Description>
          {currentJoke.joke}
        </Card.Description>
      </Card.Content>

      <Card.Content>
        <Button floated='right' as='div' labelPosition='right'>
          <Button icon>
            <Icon name='heart'/>
            Like
          </Button>
          <Label as='a' basic pointing='left'>
            2,048
          </Label>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Joke
