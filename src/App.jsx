import React from 'react'
import CustomHooks from './CustomHooks'
import './App.css'

function App() {
  const [data, setData] = CustomHooks('item','')

  return (
    <>
      <input type="text" placeholder='Type something...' value = {data} onChange={(e) => setData(e.target.value)} />
    </>
  )
}

export default App
