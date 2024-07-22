import React from 'react'
import './Experience.css'

function Experience({ formData, onFormDataChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='experienceMainContainer'>

      <div className='experiences'>
        <h2>1. Experience</h2>
        <input type="text" name='expPosition1' placeholder='Position' value={formData.expPosition1} onChange={handleChange}/>
        <div className='ExpDateContainer'>
          <input type="text" name='expStart1' placeholder='Year/Month' value={formData.expStart1} onChange={handleChange}/>
          <p>to</p>
          <input type="text" name='expEnd1' placeholder='Year/Month' value={formData.expEnd1} onChange={handleChange}/>
        </div>
        <input type="text" name='expCompany1' placeholder='Company' value={formData.expCompany1} onChange={handleChange}/>
        <textarea name="expAbout1" placeholder='Description' value={formData.expAbout1} onChange={handleChange}/>
      </div>

      <div className='experiences'>
        <h2>2. Experience (Opt)</h2>
        <input type="text" name='expPosition2' placeholder='Position' value={formData.expPosition2} onChange={handleChange}/>
        <div className='ExpDateContainer'>
          <input type="text" name='expStart2' placeholder='Year/Month' value={formData.expStart2} onChange={handleChange}/>
          <p>to</p>
          <input type="text" name='expEnd2' placeholder='Year/Month' value={formData.expEnd2} onChange={handleChange}/>
        </div>
        <input type="text" name='expCompany2' placeholder='Company' value={formData.expCompany2} onChange={handleChange}/>
        <textarea name="expAbout2" placeholder='Description' value={formData.expAbout2} onChange={handleChange}/>
      </div>

      <div className='experiences'>
        <h2>3. Experience (Opt)</h2>
        <input type="text" name='expPosition3' placeholder='Position' value={formData.expPosition3} onChange={handleChange}/>
        <div className='ExpDateContainer'>
          <input type="text" name='expStart3' placeholder='Year/Month' value={formData.expStart3} onChange={handleChange}/>
          <p>to</p>
          <input type="text" name='expEnd3' placeholder='Year/Month' value={formData.expEnd3} onChange={handleChange}/>
        </div>
        <input type="text" name='expCompany3' placeholder='Company' value={formData.expCompany3} onChange={handleChange}/>
        <textarea name="expAbout3" placeholder='Description' value={formData.expAbout3} onChange={handleChange}/>
      </div>
    </div>
  )
}

export default Experience
