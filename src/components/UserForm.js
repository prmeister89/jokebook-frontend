import React, {Component} from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

class UserForm extends Component {
  state = {
    bio: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state.bio)
  };

  handleUpdateBioSubmit = () => {
    // send the fetch!
    const url = "http://localhost:3001/api/v1/users";
    const params = {
      bio: this.state.bio
    };
    console.log(params)
    fetch(url + `/${this.props.userInfo.id}`, {
      method: "PATCH",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // this.props.updateUserInfo(response.user);
      // console.log(this.props.history)
      // this.props.history.push("/profile");
    });
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
          <Form onSubmit={this.handleUpdateBioSubmit}>
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
