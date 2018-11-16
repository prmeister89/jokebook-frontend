import React, {Component} from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

class UserForm extends Component {

  render() {
    return(
      <Modal
        open={this.props.isUpdateModalOpen}
        onOpen={()=> this.props.openUpdateModal()}
        onClose={()=> this.props.closeUpdateModal()}
        size={'large'}
         trigger={
          <Button>
            Edit Profile
          </Button>}  >
        <Modal.Content>
        <Form>
            <h2> Update Profile </h2>
                <label>
                  <h3>Bio:</h3>
                  <input name="name" type="text" value={""} onChange={(e)=> this.handleChange(e)}/>
                </label>
        </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default UserForm
