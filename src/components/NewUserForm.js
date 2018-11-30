import React, {Component} from 'react';
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from 'semantic-ui-react'

class NewUserForm extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSignUpSubmit = () => {
    // send the fetch!
    const url = "http://localhost:3001/api/v1/users";
    const params = {
      name: this.state.name,
      password: this.state.password
    };
    console.log(params)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      localStorage.setItem("token", response.token);
      this.props.updateUserInfo(response.user);
      // this.props.fetchUserJokes();
      console.log(this.props.history)
      this.props.history.push("/profile");
    });
  };

  render() {
    return (
      <Segment>
      <h3>Sign-Up!</h3>
        <Form
          onSubmit={this.handleSignUpSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Sign-Up</Button>
        </Form>
      </Segment>
    )
  }
}

export default withRouter(NewUserForm)
