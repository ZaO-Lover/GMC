import React from 'react';
import logo from './logo.png';
import './App.css';
import ChatBox from './components/ChatBox';
/** Conversation Data */
import conversationData from './fixtures/conversation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatBox messages = {conversationData}></ChatBox>
      </header>
    </div>
  );
}

export default App;
