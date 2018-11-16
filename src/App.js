import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

import NavBar from './NavBar'
import RandomJokePage from './RandomJokePage'
import ProfileContainer from './containers/ProfileContainer'
import LogInForm from './components/LogInForm'
import AboutPage from './components/AboutPage'
import NotFound from './components/NotFound'

class App extends React.Component {
  state = {
    userInfo: null,
    currentJoke: []
  }

  updateUserInfo = userInfo => this.setState({ userInfo });

  componentDidMount(){
    const url = "http://localhost:3001/api/v1/profile";
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(response => {
        this.updateUserInfo(response.user);
        console.log(this.state.userInfo)
        this.props.history.push("/profile");
      })
    }
    this.fetchRandomJoke()
  }

  fetchRandomJoke = () => {
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

  logout = () => {
    localStorage.clear();
    this.setState({ userInfo: null})
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
    console.log(e)
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3001/api/v1/users/${this.state.userInfo.id}/jokes`, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        "joke": e,
        "user_id": this.state.userInfo.id
      })
    })
    .then(res => res.json())
    .then(joke => {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          jokes: [
            ...this.state.userInfo.jokes,
            joke
          ]
        }
      })
    })
  }

  handleDeleteJoke = (e) => {
    console.log(e)
    console.log(e.id)
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3001/api/v1/users/${this.state.userInfo.id}/jokes/${e.id}`, {
      method: 'DELETE',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          jokes: this.state.userInfo.jokes.filter(joke => joke.id !== e.id)
        }
      })
    })
  }

  render(){
    return(
      <React.Fragment>
        <NavBar loggedIn={!!this.state.userInfo} logout={this.logout}/>

        <Switch>

          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route exact path="/home" render={() =>
            !!this.state.userInfo ?
              (<RandomJokePage
                currentUser={this.state.userInfo}
                currentJoke={this.state.currentJoke}
                handleNextClick={this.handleNextClick}
                handleAddJoke={this.handleAddJoke}
              />)
              :
              (<Redirect to="/login" />)

          }
          />

          <Route exact path="/profile" render={() =>
            !!this.state.userInfo ?
              (<ProfileContainer
                userInfo={this.state.userInfo}
                currentUserJokes={this.state.userInfo.jokes}
                handleDeleteJoke={this.handleDeleteJoke}
                loading={this.state.loading}
              />)  ///need to pass in currentUser from state here
              :
              (<Redirect to="/login" />)
          }
          />
          <Route exact path="/login"
            render={() =>
              <LogInForm
                updateUserInfo={this.updateUserInfo}
                fetchUserJokes={this.fetchUserJokes}
              />}
          />
          <Route component = {NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);







// <RandomJokePage
// currentUserJokes={this.state.currentUserJokes}
// currentJoke={this.state.currentJoke}
// handleNextClick={this.handleNextClick}
// handleAddJoke={this.handleAddJoke}
// />

// <ProfileContainer
//   user={this.state.currentUser}
//   userJokes={this.state.currentUser.jokes}
//   handleDeleteJoke={this.handleDeleteJoke}
// />
