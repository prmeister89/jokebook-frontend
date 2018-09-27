import React from 'react';
import {Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import AboutPage from './components/AboutPage'
import JokeBookContainer from './JokeBookContainer'

class App extends React.Component {
  state = {
    currentJoke: {}
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

  render(){
    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => (
            <JokeBookContainer
              currentJoke={this.state.currentJoke}
              handleClick={this.handleClick}
            />
          )}
          />
          <Route path="/about" component = {AboutPage} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;
