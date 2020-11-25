import React, { Component } from 'react'
import './App.css';
import {  AddMessage,
          MessageList,
          Sidebar } from './components'

function App() {
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

export default App;
