import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import Connector from './Components/Connector'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Resumer</title>
        <meta name="description" content="Create professional resumes effortlessly with Resumer, the ultimate online resume builder. Perfect for job seekers, students, and professionals, our easy-to-use platform helps you create a resume in seconds. Input your information, choose from a variety of customizable templates and download a polished resume ready to impress employers. Boost your career prospects with Resumer, your path to a better job starts here!" />
        <meta name="keywords" content="Resumer, resumer.42web.io, https://resumer.42web.io, Online Resume Builder, Professional Resume Creator, Easy Resume Maker, Free Resume Templates, Customizable Resume Designs, Quick Resume Builder, Best Resume Maker, Resume Generator Online, Create a Resume, Digital Resume Maker, Resume Writing Tool, Job Application Resume, Student Resume Builder, Professional CV Maker, Instant Resume Builder, Resume Maker for Students, Resume Templates Online, Build a Resume Online, Modern Resume Creator, Resume Editor, Resume Builder for Job Seekers, Printable Resume Templates, Resume Design Tool, Efficient Resume Builder, Resume Format Maker" />
        <meta name="author" content="Chamuditha Kalhara" />
        <meta property="og:title" content="Resumer" />
        <meta property="og:description" content="Create professional, eye-catching resumes in secondss with Resumer. Our easy-to-use online resume builder offers customizable templates tailored to impress employers and boost your career prospects. Perfect for job seekers, students, and professionals. Start building your perfect resume today!" />
        <meta property="og:url" content="https://resumer.42web.io" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router basename='/'>
        <Connector />
      </Router>
    </>
  )
}

export default App
