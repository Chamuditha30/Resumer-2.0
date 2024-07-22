import React from 'react'
import './Loader.css'
import loading from '/src/assets/loading.gif'

function Loader() {
  return (
    <div className='preViewerContainer'>
      <div className='loader'>
        <img src={loading} />
        <div><h1>Creating...</h1></div>
      </div>
    </div>
  )
}

export default Loader
