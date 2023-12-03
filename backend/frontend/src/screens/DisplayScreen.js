import {React, useState, useEffect} from 'react'
import Display from '../components/Display'
import CookieBanner from '../components/CookieBanner'
import Loader from '../components/Loader'


function DisplayScreen() {

  const [loader, setLoader] = useState(true);

    const [lastPartOfUrl, setLastPartOfUrl] = useState('');
    const currentURL = window.location.href;

    

    useEffect(() => {
      setTimeout(() => {
        setLoader(false)
      }, 3000)
        // Ottieni l'ultima parte dell'URL (dopo l'ultimo /)
        const urlParts = currentURL.split('/');
        const lastPart = urlParts[urlParts.length - 1];

        // Aggiorna lo state con l'ultima parte dell'URL
        setLastPartOfUrl(lastPart);
        
    }, []);


  return (
    <div>
      
      { loader ? (<Loader/>) : (
        <div>
      <CookieBanner/>
    <Display keyword={lastPartOfUrl}/>
    </div>
)}
</div>)
}

export default DisplayScreen