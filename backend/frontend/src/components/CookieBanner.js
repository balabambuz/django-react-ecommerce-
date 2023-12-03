import React, { useState, useEffect } from 'react';
import AppearAnimation from '../components/AppearAnimation'
import {Link} from 'react-router-dom'
import { Alert} from 'react-bootstrap'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        if (!hasAcceptedCookies) {
        setShowBanner(true);
        }
    }, 3000)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false)
  }

  const handleManageCookies = () => {
    // Redirect to a page where the user can manage cookie preferences
    window.location.href = '/manage-cookies';
  };

  return (
    <div className='fixed-bottom '>
        <AppearAnimation>
        {showBanner && (
        <Alert variant="dark" >
          <div className="d-flex justify-content-between align-items-center">
            <div>
            <p>We use cookies in this website to give you the best experience on our site and show you relevant ads. To find out, read our <a href="//www.iubenda.com/privacy-policy/14879259"> privacy policy</a></p>
            </div>
            <div>
              <button className="btn btn-primary btn-sm" onClick={acceptCookies}>Accept</button>
            </div>
          </div>
        </Alert>
    )}
    </AppearAnimation>
    </div>
  );
};

export default CookieBanner;