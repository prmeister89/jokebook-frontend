import React from 'react';
import {Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import RandomJokePage from './RandomJokePage'
import ProfileContainer from './containers/ProfileContainer'
import LogInForm from './components/LogInForm'
import AboutPage from './components/AboutPage'

class App extends React.Component {
  state = {
    currentJoke: {},
    currentUser: {}
  }

  componentDidMount(){
    fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        currentJoke: json
      })
    })
    this.getUserInfo()
  }

  handleClick = (e) => {
    fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        currentJoke: json
      })
    })
  }

  getUserInfo = () => {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentUser: data[0]
      })
    })
  }


  render(){
    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => (
            <RandomJokePage
              currentJoke={this.state.currentJoke}
              handleClick={this.handleClick}
            />
          )}
          />
          <Route exact path="/profile" render={() => (
            <ProfileContainer
              user={this.state.currentUser}
            />
          )} />
          <Route exact path="/login" component = {LogInForm} />
          <Route exact path="/about" component = {AboutPage} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;
