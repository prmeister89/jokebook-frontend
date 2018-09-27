import React from 'react';
import {Button, Icon, Card, Container} from 'semantic-ui-react'


const Joke = (props) => {
  return(
    <Container>
      <Card centered>
        <Card.Content>{props.currentJoke.joke}</Card.Content>
        <Button icon labelPosition='right' basic color='blue' onClick={() => props.handleClick()}>
        Next Joke
        <Icon name='right arrow' />
        </Button>
      </Card>
    </Container>
  )
}

export default Joke
