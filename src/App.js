import './App.css'
import devs from './devs.json'
import { useState } from 'react'

function App() {
  return (
    <div>
      <h1>Developers for Hire</h1>
      <div className="dev-list">
        {/* loop through the array of devs and make one li for each */}
        {devs.map((dev) => (
          <Developer
            name={dev.name}
            expertise={dev.expertise}
            greeting={'Hi hello'}
          />
        ))}
      </div>
    </div>
  )
}

function Developer(props) {
  const [expanded, setExpanded] = useState(false)
  const handleClick = () => {
    // expanded = !expanded // this is bad
    setExpanded(!expanded) // this is good
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>
        {expanded ? 'show less' : 'show more'}
      </button>
      {expanded && <p>{props.expertise}</p>}
    </div>
  )
}

export default App
