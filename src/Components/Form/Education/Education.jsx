import React from 'react'
import './Education.css'

function Education({ formData, onFormDataChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='educationMainContainer'>

      <div className='educations'>
        <h2>1. Education</h2>
        <input type="text" name='edu1' placeholder='Degree/Certificate or .....' value={formData.edu1} onChange={handleChange} />
        <input type="text" name='eduDate1' placeholder='Year/Month' value={formData.eduDate1} onChange={handleChange} />
        <input type="text" name='eduAcademy1' placeholder='Institute' value={formData.eduAcademy1} onChange={handleChange} />
        <textarea name="eduAbout1" placeholder='Description' value={formData.eduAbout1} onChange={handleChange} />
      </div>

      <div className='educations'>
        <h2>2. Education (Opt)</h2>
        <input type="text" name='edu23' placeholder='Degree/Certificate or .....' value={formData.edu2} onChange={handleChange} />
        <input type="text" name='eduDate23' placeholder='Year/Month' value={formData.eduDate2} onChange={handleChange} />
        <input type="text" name='eduAcademy23' placeholder='Institute' value={formData.eduAcademy2} onChange={handleChange} />
        <textarea name="eduAbout23" placeholder='Description' value={formData.eduAbout2} onChange={handleChange} />
      </div>

      <div className='educations'>
        <h2>3. Education (Opt)</h2>
        <input type="text" name='edu3' placeholder='Degree/Certificate or .....' value={formData.edu3} onChange={handleChange} />
        <input type="text" name='eduDate3' placeholder='Year/Month' value={formData.eduDate3} onChange={handleChange} />
        <input type="text" name='eduAcademy3' placeholder='Institute' value={formData.eduAcademy3} onChange={handleChange} />
        <textarea name="eduAbout3" placeholder='Description' value={formData.eduAbout3} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Education
