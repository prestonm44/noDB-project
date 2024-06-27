import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import PlayerData from './components/PlayerData'


export default function App() {
  const [chiefPlayerData, setChiefPlayerData] = useState([])

  useEffect(() => {
    axios.get('/chiefPlayer').then(res => {
      setChiefPlayerData(res.data)
    })
  }, [])


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
