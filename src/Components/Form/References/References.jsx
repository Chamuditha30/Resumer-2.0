import React from 'react'
import './References.css'

function References({ formData, onFormDataChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='referenceMainContainer'>

      <div className='references'>
        <h2>1. References</h2>
        <input type="text" name='ref1' placeholder='Name of reference' value={formData.ref1} onChange={handleChange}/>
        <input type="text" name='refPosition1' placeholder='Postition of reference' value={formData.refPosition1} onChange={handleChange}/>
        <input type="text" name='refCompany1' placeholder='Company' value={formData.refCompany1} onChange={handleChange}/>
        <input type="text" name='refContact1' placeholder='Contact' value={formData.refContact1} onChange={handleChange}/>
      </div>

      <div className='references'>
        <h2>2. References</h2>
        <input type="text" name='ref2' placeholder='Name of reference' value={formData.ref2} onChange={handleChange}/>
        <input type="text" name='refPosition2' placeholder='Postition of reference' value={formData.refPosition2} onChange={handleChange}/>
        <input type="text" name='refCompany2' placeholder='Company' value={formData.refCompany2} onChange={handleChange}/>
        <input type="text" name='refContact2' placeholder='Contact' value={formData.refContact2} onChange={handleChange}/>
      </div>

    </div>
  )
}

export default References
