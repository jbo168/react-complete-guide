import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age:28 },
      {name: 'J', age:29 },
      {name: 'Jo', age:30 }
    ],
    otherState: 'Some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
       {persons}
      </div>
    );
  }
}

export default App;