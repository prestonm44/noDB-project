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
    </section>
  )
}
<script type="module" src="main.jsx"></script>
export default App
