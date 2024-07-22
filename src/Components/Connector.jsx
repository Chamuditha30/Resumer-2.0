import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Form from './Form/Form'
import proPicSmple from '/src/assets/proPic.jpg'
import Template1 from './Resume/Template1/Template1'
import Template2 from './Resume/Template2/Template2'
import Template3 from './Resume/Template3/Template3'

function Connector() {

  const [formData, setFormData] = useState({
    proPic: proPicSmple,
    name: "",
    address: "",
    about: "",
    mobile: "",
    eMail: "",
    bDay: "",
    gender: "",
    status: "",
    nationality: "",

    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",

    expPosition1: "",
    expStart1: "",
    expEnd1: "",
    expCompany1: "",
    expAbout1: "",

    expPosition2: "",
    expStart2: "",
    expEnd2: "",
    expCompany2: "",
    expAbout2: "",

    expPosition3: "",
    expStart3: "",
    expEnd3: "",
    expCompany3: "",
    expAbout3: "",

    edu1: "",
    eduDate1: "",
    eduAcademy1: "",
    eduAbout1: "",

    edu2: "",
    eduDate2: "",
    eduAcademy2: "",
    eduAbout2: "",

    edu3: "",
    eduDate3: "",
    eduAcademy3: "",
    eduAbout3: "",

    ref1: "",
    refPosition1: "",
    refCompany1: "",
    refContact1: "",

    ref2: "",
    refPosition2: "",
    refCompany2: "",
    refContact2: ""
  });

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  const [loader, setLoader] = useState(false)

  const handleLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 10000)
  }

  return (
    <Routes>
      <Route path="/" element={<Form formData={formData} onFormDataChange={handleFormDataChange} handleLoader={handleLoader} />} />
      <Route path="/Template1" element={<Template1 loader={loader} formData={formData} />} />
      <Route path="/Template2" element={<Template2 loader={loader} formData={formData} />} />
      <Route path="/Template3" element={<Template3 loader={loader} formData={formData} />} />
    </Routes>
  )
}

export default Connector
