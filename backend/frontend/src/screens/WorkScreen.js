import {React, useState, useEffect} from 'react'
import DisplayWork from '../components/DisplayWork'


function DisplayScreen() {

    const [lastPartOfUrl, setLastPartOfUrl] = useState('');
    const currentURL = window.location.href;

    useEffect(() => {
        // Ottieni l'ultima parte dell'URL (dopo l'ultimo /)
        const urlParts = currentURL.split('/');
        const lastPart = urlParts[urlParts.length - 1];

        // Aggiorna lo state con l'ultima parte dell'URL
        setLastPartOfUrl(lastPart);

        
      
        
    }, []);


  return (
    <div>
    <DisplayWork keyword={lastPartOfUrl}/>
    </div>
  )
}

export default DisplayScreen