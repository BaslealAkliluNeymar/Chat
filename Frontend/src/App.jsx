import React from 'react'
import getAll from './services/services.js'

import { useState, useEffect } from 'react'
const App = () => {

  const [data, setData] = useState([])
  useEffect(() =>{
    getAll()
    .then(res => setData(res))
  },[])
  console.log(data)
  return (
    <div>App</div>
  )
}

export default App