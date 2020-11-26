import React, { Component } from 'react'
import './App.css';
import { AddMessage, MessagesList, Sidebar } from './components'



class App extends Component {
  render() {
    return (
      <div id='container'>
        <Sidebar />
        <section id='main'>
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
