import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = () => {
    // send the fetch!
    const url = "http://localhost:3001/api/v1/login";
    const params = {
      name: this.state.name,
      password: this.state.password
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(response => {
      console.log(response)
      localStorage.setItem("token", response.token);
      this.props.updateUserInfo(response.user_info);
      this.props.history.push("/profile");
    });
  };

  render() {
    return (
      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
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
          <Button type="submit">Login</Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(LoginForm);
