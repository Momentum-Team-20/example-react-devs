import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DeveloperDetail from './components/DeveloperDetail'
import Developer from './components/Developer'

function App() {
  const [devs, setDevs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDev, setSelectedDev] = useState('')
  const [selectedDevGitHub, setSelectedDevGitHub] = useState('')
  const [exclamation, setExclamation] = useState('Why not select Freddie?')

  useEffect(() => {
    console.log('useEffect runs')
    axios.get('https://node-api-devs-for-hire.glitch.me/devs').then((res) => {
      setLoading(false)
      setDevs(res.data)
    })
  }, [])

  const selectDev = (name, gitHub) => {
    console.log('selectDev runs')
    setSelectedDev(name)
    setSelectedDevGitHub(gitHub)
  }

  console.log('render runs')
  if (loading) {
    return <h1>🍍 Loading... 🍍</h1>
  }

  if (selectedDev) {
    return (
      <DeveloperDetail
        selectedDev={selectedDev}
        gitHub={selectedDevGitHub}
        setSelectedDev={setSelectedDev}
        exclamation={exclamation}
      />
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
            gitHub={dev.gitHub}
            expertise={dev.expertise}
            greeting={'Hi hello'}
            selectDev={selectDev}
            exclamation={exclamation}
            setExclamation={setExclamation}
          />
        ))}
      </div>
    </div>
  )
}



export default App
