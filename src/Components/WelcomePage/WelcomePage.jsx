import React from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom';
import welcomePage from '/src/assets/welcomePage.mp4'
import mobileWelcomePage from '/src/assets/mobileWelcomePage.mp4'

function WelcomePage() {

    const navigate = useNavigate()

    const handleBackForm = () => {
        navigate('/Form');
    };

    return (
        <>
            <div className='mainWelcomePageContainer'>

                <div className='welcomePageContainer'>

                    <video className='welcomePagePC' autoPlay loop muted>
                        <source src={welcomePage} type="video/mp4" />
                    </video>

                    <video className='welcomePageMobile' autoPlay loop muted>
                        <source src={mobileWelcomePage} type="video/mp4" />
                    </video>

                    <button onClick={handleBackForm} className='strtBtnWelcomePage'>Start</button>




                </div>
            </div>
        </>
    )
}

export default WelcomePage
