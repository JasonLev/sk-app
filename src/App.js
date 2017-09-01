import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chewbaca from './Chewbaca';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      starWarsName: "Chewbaca"
    }
  }
  componentDidMount(){
    let url = "https://swapi.co/api/people/1";
    fetch(url)
        .then((response) => {
          return response.json()
        })
        .then(data => {
          console.log("this is: ", this);
          this.setState({
            starWarsName: data.name
          });
        });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My favorite Star Wars character is: {this.state.starWarsName}</h1>
        <Chewbaca />
      </div>
    );
  }
}

export default App;
