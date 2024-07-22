import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Connector from './Components/Connector'

function App() {
  return (
    <>
      <Router>
        <Connector />
      </Router>
    </>
  )
}

export default App
