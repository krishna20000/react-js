import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  return (
    <>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
      <p>Hello {name}</p>
    </>
  )
}

export default App