import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader'
import './Template1.css'
import logo from '/src/assets/logo & slogan.png'
import prev1 from '/src/assets/prev1.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Template1({ loader, formData }) {

  const navigate = useNavigate()

  const handleBackForm = () => {
    navigate('/');
  };

  const [downloader, setDownloader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.containerTemplate1');
    setDownloader(true);

    // Temporarily show .containerTemplate1 on mobile
    const originalDisplay = window.getComputedStyle(capture).display;
    capture.style.display = 'grid';

    html2canvas(capture, {
      scale: 2, // Increased scale for better quality
      scrollX: 0,
      scrollY: 0, // Capture from the top of the .resume element
      windowWidth: capture.scrollWidth,
      windowHeight: capture.scrollHeight,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'legal');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = imgProps.width;
      const imgHeight = imgProps.height;

      // Calculate the scaling factor to fit the image to the PDF dimensions
      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const scaledWidth = imgWidth * scaleFactor;
      const scaledHeight = imgHeight * scaleFactor;

      // Center the image within the PDF
      const marginX = (pdfWidth - scaledWidth) / 2;
      const marginY = (pdfHeight - scaledHeight) / 2;

      pdf.addImage(imgData, 'PNG', marginX, marginY, scaledWidth, scaledHeight);
      setDownloader(false);
      pdf.save('Resume.pdf');

      // Revert the display property to its original state
      capture.style.display = originalDisplay;
    }).catch(() => {
      setDownloader(false);
      // Revert the display property to its original state in case of an error
      capture.style.display = originalDisplay;
    })

  }

  return (
    <>
      {loader && <Loader />}
      <div className='logoContainer'>
        <img src={logo} alt="logo" className='logo' />
      </div>

      <div className='mainContainerTemplate1'>

        <div className='notAvailableContainer'>
          <img src={prev1}></img>
          <h1>Preview not available in mobile screens :( <br /> press download</h1>
        </div>

        <div className='btnContainer'>
          <button className='back' onClick={handleBackForm}>Back</button>
          <button className='download' onClick={downloadPDF} disabled={!(downloader === false)} type="submit">{downloader ? (
            <span>Downloading...</span>
          ) : (
            <span>Download</span>
          )}<i class="fa fa-download" aria-hidden="true"></i></button>
        </div>

        <div className='containerTemplate1'>

          <div className='leftSide'>

            <div className='proPicContainer'>
              <img src={formData.proPic} className='proPicture' />
            </div>

            <div className='personalInformation'>
              <p className='resName'>{formData.name}</p>
              <div className='informations'>
                <div className='info'>
                  <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                  <p>{formData.address}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                  <p>{formData.mobile}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <p>{formData.eMail}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-calendar-o" aria-hidden="true"></i></span>
                  <p>{formData.bDay}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-venus-mars" aria-hidden="true"></i></span>
                  <p>{formData.gender}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-check-circle" aria-hidden="true"></i></span>
                  <p>{formData.status}</p>
                </div>
                <div className='info'>
                  <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                  <p>{formData.nationality}</p>
                </div>
              </div>
            </div>

            <div className='resumeSkillContainer'>
              <div className='skillHead'>
                <span><i class="fa fa-plus" aria-hidden="true"></i></span>
                <h1>Skills</h1>
              </div>
              <div className='skillList'>
                <li>{formData.skill1}</li>
                <li>{formData.skill2}</li>
                <li>{formData.skill3}</li>
                <li>{formData.skill4}</li>
                <li>{formData.skill5}</li>
                <li>{formData.skill6}</li>
              </div>
            </div>

            <div className='refContainer'>
              <div className='refHead'>
                <span><i class="fa fa-users" aria-hidden="true"></i></span>
                <h1>References</h1>
              </div>
              <div className='refs'>
                <p className='refName'>{formData.ref1}</p>
                <p className='refPos'>{formData.refPosition1}</p>
                <p className='refCom'>{formData.refCompany1}</p>
                <p className='refCon'>{formData.refContact1}</p>
              </div>

              <div className='refs'>
                <p className='refName'>{formData.ref2}</p>
                <p className='refPos'>{formData.refPosition2}</p>
                <p className='refCom'>{formData.refCompany2}</p>
                <p className='refCon'>{formData.refContact2}</p>
              </div>
            </div>

          </div>


          <div className='rightSide'>

            <div className='description'>
              <div className='descriptionHead' >
                <span><i class="fa fa-user" aria-hidden="true"></i></span>
                <h1>Profile</h1>
              </div>
              <p>{formData.about}</p>
            </div>

            <div className='expContainer'>
              <div className='expHead'>
                <span><i class="fa fa-briefcase" aria-hidden="true"></i></span>
                <h1>Experiences</h1>
              </div>

              <div className='exps'>
                <p className='expPosi'>{formData.expPosition1}</p>
                <div className='expDate'>
                  <p>{formData.expStart1}</p>
                  <p>-</p>
                  <p>{formData.expEnd1}</p>
                </div>
                <p className='expComp'>{formData.expCompany1}</p>
                <p className='expDec'>{formData.expAbout1}</p>
              </div>

              <div className='exps'>
                <p className='expPosi'>{formData.expPosition2}</p>
                <div className='expDate'>
                  <p>{formData.expStart2}</p>
                  <p>-</p>
                  <p>{formData.expEnd2}</p>
                </div>
                <p className='expComp'>{formData.expCompany2}</p>
                <p className='expDec'>{formData.expAbout2}</p>
              </div>

              <div className='exps'>
                <p className='expPosi'>{formData.expPosition3}</p>
                <div className='expDate'>
                  <p>{formData.expStart3}</p>
                  <p>-</p>
                  <p>{formData.expEnd3}</p>
                </div>
                <p className='expComp'>{formData.expCompany3}</p>
                <p className='expDec'>{formData.expAbout3}</p>
              </div>
            </div>

            <div className='eduContainer'>
              <div className='eduHead'>
                <span><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                <h1>Education</h1>
              </div>
              <div className='edus'>
                <p className='degree'>{formData.edu1}</p>
                <p className='eduDate'>{formData.eduDate1}</p>
                <p className='eduAce'>{formData.eduAcademy1}</p>
                <p className='eduDec'>{formData.eduAbout1}</p>
              </div>

              <div className='edus'>
                <p className='degree'>{formData.edu2}</p>
                <p className='eduDate'>{formData.eduDate2}</p>
                <p className='eduAce'>{formData.eduAcademy2}</p>
                <p className='eduDec'>{formData.eduAbout2}</p>
              </div>

              <div className='edus'>
                <p className='degree'>{formData.edu3}</p>
                <p className='eduDate'>{formData.eduDate3}</p>
                <p className='eduAce'>{formData.eduAcademy3}</p>
                <p className='eduDec'>{formData.eduAbout3}</p>
              </div>
            </div>


          </div>
        </div>


      </div>
    </>
  )
}

export default Template1
