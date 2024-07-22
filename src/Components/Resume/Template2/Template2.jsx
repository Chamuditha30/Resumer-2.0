import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader'

function Template2({loader}) {
  
  const navigate = useNavigate()

  const handleBackForm = () => {
    navigate('/');
  };

  return (
    <div>
      {loader && <Loader />}
      <h1>Template2</h1>
      <button onClick={handleBackForm}>Back to "/template"</button>
    </div>
  )
}

export default Template2
