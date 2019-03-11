import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'


export default class AboutPage extends Component {
  render() {
    return(
      <React.Fragment>
        <h3>What is JokeBook?</h3>
        <br></br>
        <p>
        JokeBook is the App that allows you to randomly scroll through some of the best/worst jokes around!
        </p>
        <p>
        Find a joke you thought was worth saving?  Just add it and it will be saved to your profile!
        </p>
        <p>
        Sign-up today!
        </p>
        <p>
        * Future features will include 'liking' and 'sharing' your favorite jokes with your friends!  TBD :)
        </p>
      </React.Fragment>
    )
  }
}
