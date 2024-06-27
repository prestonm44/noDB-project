import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import PlayerData from './components/PlayerData'


function App() {

  const deleteCard = (id) => {
    const newData = {...PlayerData};

    const index = newData.PlayerData.findIndex((row) => {
      return row.id === id
    })

  }

  return (
    <section>
      <Header />
      <div className="apiText">
        <PlayerData />
      </div>
      <div className='addAPlayer'>
        <button className='addPlayer'>Add a player here</button>
      </div>
    </section>
  )
}
<script type="module" src="main.jsx"></script>
export default App
