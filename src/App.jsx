import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import Connector from './Components/Connector'

function App() {
  return (
    <>
      <Router basename='/'>
        <Connector />
      </Router>
    </>
  )
}

export default App
