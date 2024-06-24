import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import PlayerData from './components/PlayerData'


function App() {

  return (
    <section>
      <Header />
      <div className="apiText">
        <PlayerData />
      </div>
      <addAPlayer>
        <button className='addPlayer'>Add a player here</button>
      </addAPlayer>
    </section>
  )
}
<script type="module" src="main.jsx"></script>
export default App
