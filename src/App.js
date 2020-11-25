import React, { Component } from 'react'
import './App.css';
import {  AddMessage,
          MessageList,
          Sidebar } from './components'

class App extends Component {
  render() {
    return (
      <div id='container'>
        <Sidebar />
        <section id='main'>
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
