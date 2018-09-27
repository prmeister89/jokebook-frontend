import React from 'react';
import {Button} from 'semantic-ui-react'


const Joke = (props) => {
  return(
    <div>
      <div>
        <p>{props.currentJoke.joke}</p>
      </div>
      <Button onClick={() => props.handleClick()}>Tell me a joke!</Button>
    </div>
  )
}

export default Joke
