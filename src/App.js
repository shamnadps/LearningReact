import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a react App </h1>
        <Person name="Shamnad" age="28">My Hobbies are: Coding</Person>
      </div>
    );
  }
}

export default App;
