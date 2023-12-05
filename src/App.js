import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [devs, setDevs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDev, setSelectedDev] = useState('')

  useEffect(() => {
    console.log('useEffect runs')
    axios.get('https://node-api-devs-for-hire.glitch.me/devs').then((res) => {
      setLoading(false)
      setDevs(res.data)
    })
  }, [])

  console.log('render runs')
  if (loading) {
    return <h1>🍍 Loading... 🍍</h1>
  }

  if (selectedDev) {
    return (
      <div>
        <button onClick={() => setSelectedDev('')}>Back to list</button>
        <h2>{selectedDev}</h2>
      </div>
    )
  }

  return (
    <div>
      <h1>Developers for Hire</h1>
      <div className="dev-list">
        {/* loop through the array of devs and make one li for each */}
        {devs.map((dev) => (
          <Developer
            key={dev.id}
            name={dev.name}
            expertise={dev.expertise}
            greeting={'Hi hello'}
            selectDev={setSelectedDev}
          />
        ))}
      </div>
    </div>
  )
}

function Developer(props) {
  const handleClick = () => {
    props.selectDev(props.name)
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>Select</button>
    </div>
  )
}

export default App
