import React, {Component} from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

class UserForm extends Component {
  state = {
    bio: this.props.userInfo.bio
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state.bio)
  };


  render() {
    return(
      <Modal
        open={this.props.isUpdateModalOpen}
        onOpen={()=> this.props.openUpdateModal()}
        onClose={()=> this.props.closeUpdateModal()}
        size={'large'}
        trigger={
          <Button>
            Edit Your Bio
          </Button>
        }
      >;

        <Modal.Content>
          <Form onSubmit={() => this.props.handleUpdateUserBio(this.state.bio)}>
            <h2> Update Bio </h2>
              <Form.Input
              label="Bio:"
              placeholder="Enter your Bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              />

            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>

      </Modal>
    )
  }
}

export default UserForm
