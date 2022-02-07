import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const personNameList = [
    {
      first: 'Bruce',
      last: 'Wayne'       
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Kapil' messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList nameList={personNameList}/>
    </div>
  );
}

export default App;
