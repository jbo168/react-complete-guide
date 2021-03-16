import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age:28 },
      {name: 'J', age:28 },
      {name: 'Jo', age:28 }
    ],
    otherState: 'Some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Elaine';
      this.setState( {
        persons: [
        { name: 'John', age:28 },
        { name: newName, age:29 },
        { name: 'Jo', age:26 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
      this.setState( {
        persons: [
        { name: event.target.value, age:28 },
        { name: 'Jo', age:28 },
        { name: 'Jo', age:28 }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jimmy')} >My hobbies: Programming</Person> 
        <Person 
          name="J" 
          age="65"
          changed={this.nameChangedHandler}></Person>
        <Person 
          name="Jo" 
          age="72"/>
      </div>
    );
  }
}

export default App;