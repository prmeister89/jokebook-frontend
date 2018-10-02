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
    userInfo: null
    // currentJoke: {},
    // currentUser: {},
    // currentUserJokes: []
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
  }
  //   fetch(`https://icanhazdadjoke.com/`, {
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       currentJoke: json
  //     })
  //   })
  //   this.getUserInfo()
  // }

  logout = () => {
    localStorage.clear();
    this.setState({ userInfo: null})
  }

  // handleNextClick = (e) => {
  //   fetch(`https://icanhazdadjoke.com/`, {
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       currentJoke: json
  //     })
  //   })
  // }

  // handleAddJoke = (e) => {
  //   //e=joke description
  //   // console.log(e)
  //   fetch(`http://localhost:3001/api/v1/jokes`, {
  //     method: 'POST',
  //     headers: {
  //       "Accept":"application/json",
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify({
  //       "joke": e,
  //       "user_id": this.state.currentUser.id
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(joke => {
  //     this.setState({
  //       currentUser: {
  //         ...this.state.currentUser,
  //         jokes: [
  //           ...this.state.currentUser.jokes,
  //           joke
  //         ]
  //       }
  //     })
  //   })
  //   console.log(this.state.currentUser)
  // }

  // handleDeleteJoke = (e) => {
  //   // console.log(e)
  //   // console.log(e.id)
  //   fetch(`http://localhost:3001/api/v1/jokes/${e.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(data => this.getUserInfo())
  // }

  // getUserInfo = () => {
  //   fetch('http://localhost:3001/api/v1/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       currentUser: data[0],
  //       currentUserJokes: data[0].jokes
  //     })
  //   })
  // }



  render(){
    return(
      <React.Fragment>
        <NavBar loggedIn={!!this.state.userInfo} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />

          <Route exact path="/profile" render={() =>
            this.state.userInfo ?
              (<ProfileContainer
                userInfo={this.state.userInfo}
                {...this.state.userInfo}/>)  ///need to pass in currentUser from state here
              :
              (<Redirect to="/login" />)
          }
          />
          <Route exact path="/login" render={() => <LogInForm updateUserInfo={this.updateUserInfo} />}
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
