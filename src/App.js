import React, { Component } from 'react'
import './App.css';
import { Sidebar } from './components/Sidebar'
import { MessagesList } from './components/Sidebar'
import { AddMessage } from './components/Sidebar'

function App() {
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

export default App;
