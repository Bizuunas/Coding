import './App.css'
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch ("/todos").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  })

  return (
    <>

    {(typeof backendData.Todo === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((Todo, i) => (
        <p key={i}>{Todo}</p>
      ))
    )}

    </>
  )
}

export default App
