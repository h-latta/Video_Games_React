import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import OldChart from './Components/2013Chart/2013Chart';

function App() {

  const [Games, SetGames] = useState([])

  async function getAllGames(){
    const search = await axios.get(`https://localhost:7260/api/games`)
    SetGames(search.data.items)
    console.log(Games)
  }

  return (
    <div className="App">
      <nav><NavBar /></nav>
      <h1>Hello world!</h1>
      <OldChart games={getAllGames} />
    </div>
  );
}

export default App;
