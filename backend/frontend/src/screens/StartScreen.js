import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import AnimatedPage from '../components/AppearAnimation'
import AppearAnimation from '../components/AppearAnimation';

function StartScreen() {
  const [loading, setLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[]);

  useEffect(() => {
    setTimeout(() => {
      setShowBtn(true)
    }, 10000)
  },[]);

  return (
  <div> 
    
    {loading ? (
      <Loader />
    ) : (
  <div> 
    <AppearAnimation>
    

    <div className="background-video">
        <video id="desktop-video" autoPlay loop muted>
          <source src="/static/images/TV.mp4" type="video/mp4" />
          {/* Altre versioni o formati del video desktop */}
        </video>
        <video id="mobile-video" autoPlay loop muted>
          <source src="/static/images/TV2.mp4" type="video/mp4" />
          {/* Altre versioni o formati del video mobile */}
        </video>
      </div>

    </AppearAnimation>
    </div>
    )}

{showBtn ? (
  <AppearAnimation>
      <div className='center'>
      <Link to={`/home`}>
      <Button id='center-button' type='submit' variant='black'>Welcome!</Button>
      </Link>
      </div>
  </AppearAnimation>
    ) : ( <></>)}
    
    </div>
  )
}

export default StartScreen