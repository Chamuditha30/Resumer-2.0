import React, { useState } from 'react'
import './Form.css'
import logo from '/src/assets/logo & slogan.png'
import Personal from './Personal/Personal'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import References from './References/References'
import Template from './Template/Template'


function Form({formData, onFormDataChange, handleLoader}) {

  const [page, setPage] = useState(0);
  const formTitles = ["Personal Details", "Experience", "Education", "Reference Information", "Select Resume Template"];
  const displayPage = () => {
    if (page === 0) {
      return <Personal formData={formData} onFormDataChange={onFormDataChange} />;
    }
    else if (page === 1) {
      return <Experience formData={formData} onFormDataChange={onFormDataChange}/>;
    }
    else if (page === 2) {
      return <Education formData={formData} onFormDataChange={onFormDataChange}/>;
    }
    else if (page === 3) {
      return <References formData={formData} onFormDataChange={onFormDataChange}/>;
    }
    else {
      return <Template handleLoader={handleLoader} />;
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleNextClick = () => {
    setPage((crntPage) => crntPage + 1);
    scrollToTop();
  }

  const handleBackClick = () => {
    setPage((crntPage) => crntPage - 1);
    scrollToTop();
  }

  const navigatePage = (pageNo) => {
    setPage(pageNo);
    scrollToTop();
  }

  return (

    <div className='mainContainer'>

      

      <div className='logoContainer'>
        <img src={logo} alt="logo" className='logo' />
      </div>

      <div className='formContainer'>
        <div className='progressBar'>
          <div style={{ width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}></div>
        </div>
        <div className='form'>
          <div className='formHeader'>
            <h1>{formTitles[page]}</h1>
          </div>

          <div className='formBody'>{displayPage()}</div>

          <div className='formFooter'>

            <button
              style={{ opacity: page === 0 ? "0.5" : "1" }}
              className='naviBtn'
              disabled={page === 0}
              onClick={handleBackClick}><i className="fa fa-caret-left" aria-hidden="true"></i>Back</button>

            {formTitles.map((_, index) => (
              <button
                key={index}
                className='naviBtnNo'
                onClick={() => navigatePage(index)}
                style={{ opacity: page === index ? "0.5" : "1" }}
              > {index + 1} </button>
            ))}

            <button
              style={{ opacity: page === formTitles.length - 1 ? "0.5" : "1" }}
              className='naviBtn'
              disabled={page === formTitles.length - 1}
              onClick={handleNextClick}>Next<i className="fa fa-caret-right" aria-hidden="true"></i></button>

          </div>
        </div>
      </div>

    </div>


  )
}

export default Form
