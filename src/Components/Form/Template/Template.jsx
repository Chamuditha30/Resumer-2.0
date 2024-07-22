import React, { useState } from 'react'
import temp1 from '/src/assets/temp1.jpg'
import temp2 from '/src/assets/temp2.jpg'
import temp3 from '/src/assets/temp3.jpg'
import './Template.css'
import { useNavigate } from 'react-router-dom'

function Template({ handleLoader }) {

    const [selectedTemplate, setSelectedTemplate] = useState()

    const navigate = useNavigate()

    const handleChange = (event) => {
        setSelectedTemplate(event.target.value);
    };

    const handleCreateResume = () => {
        handleLoader();
        if (selectedTemplate) {
            navigate(`/${selectedTemplate}`);
        }
    };

    return (
        <div className='mainTemplateContainer'>

            <div className='radioContainer'>

                <div>
                    <label className='cstmRadio template1'>
                        <input type="radio" name="radio" value="Template1" onChange={handleChange} />
                        <img src={temp1} />
                    </label>
                </div>

                <div>
                    <label className='cstmRadio template2'>
                        <input type="radio" name="radio" value="Template2" onChange={handleChange} disabled />
                        <img src={temp2} />
                    </label>
                    <p>Not Available</p>
                </div>

                <div>
                    <label className='cstmRadio template3'>
                        <input type="radio" name="radio" value="Template3" onChange={handleChange} disabled />
                        <img src={temp3} />
                    </label>
                    <p>Not Available</p>
                </div>

            </div>

            <div className='createBtn'>
                <button onClick={handleCreateResume}>Create Resume<i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Template
