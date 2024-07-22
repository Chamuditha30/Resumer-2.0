import React from 'react'
import './Personal.css'

function Personal({ formData, onFormDataChange }) {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'file' ? URL.createObjectURL(event.target.files[0]) : event.target.value;
    onFormDataChange((prev) => {
      return { ...prev, [name]: value };
    });
  };


  return (
    <div className='personalMainContainer'>

      <div className='proPicUpContainer'>
        <input type="file" id='proPicUp' name='proPic' onChange={handleChange} />
        <label For="proPicUp"><i class="fa fa-upload" aria-hidden="true"></i>Upload Picture</label>
      </div>

      <div className='personalInfoContainer'>

        <div className='personalInfo'>
          <h2 className='catHead'>Personal Info</h2>
          <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
          <input type="text" name='address' placeholder='Address' value={formData.address} onChange={handleChange} />
          <textarea maxLength={590} name="about" placeholder='Yourself' value={formData.about} onChange={handleChange} />
          <input type="text" name='mobile' placeholder='Mobile number' value={formData.mobile} onChange={handleChange} />
          <input type="eMail" name='eMail' placeholder='E-mail' value={formData.eMail} onChange={handleChange} />
          <div className='bdayContainer'>
            <label For="bDay">Birthday</label>
            <input type="date" name="bDay" id="bDay" value={formData.bDay} onChange={handleChange} />
          </div>
          <input type="text" name='gender' placeholder='Gender' value={formData.gender} onChange={handleChange} />
          <input type="text" name='status' placeholder='Single or Married' value={formData.status} onChange={handleChange} />
          <input type="text" name='nationality' placeholder='Nationality' value={formData.nationality} onChange={handleChange} />
        </div>

        <div className='skillContainer'>
          <h2 className='catHead'>Personal Skills</h2>
          <input type="text" name='skill1' placeholder='Skill' value={formData.skill1} onChange={handleChange} />
          <input type="text" name='skill2' placeholder='Skill' value={formData.skill2} onChange={handleChange} />
          <input type="text" name='skill3' placeholder='Skill' value={formData.skill3} onChange={handleChange} />
          <input type="text" name='skill4' placeholder='Skill (Opt)' value={formData.skill4} onChange={handleChange} />
          <input type="text" name='skill5' placeholder='Skill (Opt)' value={formData.skill5} onChange={handleChange} />
          <input type="text" name='skill6' placeholder='Skill (Opt)' value={formData.skill6} onChange={handleChange} />
        </div>

      </div>



    </div>
  )
}

export default Personal
