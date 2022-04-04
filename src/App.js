import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [Games, SetGames] = useState([])

  async function getAllGames(){
    const search = await axios.get(`https://localhost:7260`)
    SetGames(search.data.items)
    console.log(Games)
  }

  return (
    <div className="App">
      <nav><NavBar /></nav>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
