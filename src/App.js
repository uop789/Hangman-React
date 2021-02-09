import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Notification from './components/Notification'
import Game from './components/GameContainer/Game'

function App() {
  const [errorMessage, setErrorMessage] = useState("")

  const showNotification = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);  
  } 

  return (
    <div className="App">
     <Header />
     <Notification errorMessage = {errorMessage} />
     <Game showNotification = {showNotification} />
    </div>
  );
}

export default App;
