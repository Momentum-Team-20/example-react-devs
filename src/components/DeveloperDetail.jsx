import axios from 'axios'
import { useEffect, useState } from 'react'

const DeveloperDetail = ({
  exclamation,
  selectedDev,
  setSelectedDev,
  gitHub,
}) => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const gitHubUrl = `https://api.github.com/users/${gitHub}/repos`
    axios.get(gitHubUrl).then((res) => {
      console.log(res.data)
      setRepos(res.data)
    })
  })

  return (
    <div>
      <button onClick={() => setSelectedDev('')}>Back to list</button>
      <h2>{selectedDev}</h2>
      <p>{exclamation}</p>
      <ul>
        {repos.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default DeveloperDetail
