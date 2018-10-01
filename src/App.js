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
    currentUser: {},
    currentUserJokes: []
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

  handleNextClick = (e) => {
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

  handleAddJoke = (e) => {
    //e=joke description
    // console.log(e)
    fetch(`http://localhost:3001/api/v1/jokes`, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "joke": e,
        "user_id": this.state.currentUser.id
      })
    })
    .then(res => res.json())
    .then(joke => {
      this.setState({
        currentUser: {
          ...this.state.currentUser,
          jokes: [
            ...this.state.currentUser.jokes,
            joke
          ]
        }
      })
    })
    console.log(this.state.currentUser)
  }

  handleDeleteJoke = (e) => {
    // console.log(e)
    // console.log(e.id)
    fetch(`http://localhost:3001/api/v1/jokes/${e.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => this.getUserInfo())
  }

  getUserInfo = () => {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentUser: data[0],
        currentUserJokes: data[0].jokes
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
              currentUserJokes={this.state.currentUserJokes}
              currentJoke={this.state.currentJoke}
              handleNextClick={this.handleNextClick}
              handleAddJoke={this.handleAddJoke}
            />
          )}
          />
          <Route exact path="/profile" render={() => (
            <ProfileContainer

              user={this.state.currentUser}
              userJokes={this.state.currentUser.jokes}
              handleDeleteJoke={this.handleDeleteJoke}
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
