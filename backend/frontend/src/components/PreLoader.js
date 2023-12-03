import React, { useEffect, useState } from 'react'
import { preLoaderAnim } from '../animations';

function PreLoader() {

  const [randomNum, SetRandomNum] = useState(0);

    useEffect(() => {
        SetRandomNum(Math.floor(Math.random() * 5) + 1)
        preLoaderAnim();  
    },[])

    let contenuto;
    switch(randomNum) { 
      case 1:
        contenuto = ['🙈','🙉','🙊'];
      break;
      case 2:
        contenuto = ['🦋','🦋','🦋'];
      break;
      case 3: 
        contenuto = ['⛩','⛩','⛩'];
      break;
      case 4: 
        contenuto = ['🌘','🌗','🌖'];
      break;
      case 5: 
        contenuto = ['🥰','🤯','😂'];
      break;
      default:
        contenuto = [];
    }

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>{contenuto[0]}</span>
            <span>{contenuto[1]}</span>
            <span>{contenuto[2]}</span>
        </div>
    </div>
  )
}

export default PreLoader