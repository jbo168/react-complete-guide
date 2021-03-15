import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age:28 },
      {name: 'J', age:28 },
      {name: 'Jo', age:28 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Programming</Person>
        <Person name="J" age="65"></Person>
        <Person name="Jo" age="72"></Person>
      </div>
    );
  }
}

export default App;