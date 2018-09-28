import React from 'react'
import {Card, Header, Image} from 'semantic-ui-react'

const UserDetails = (props) => {
  return (
    <Card>
      <Image src='https://vignette.wikia.nocookie.net/simpsonstappedout/images/a/ab/Homer-simpson.jpg/revision/latest?cb=20160121173741' />
      <Card.Content>
        <Card.Header as='h3'>{props.user.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header as='h3'>Bio</Card.Header>
        <Card.Description>{props.user.bio}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default UserDetails
