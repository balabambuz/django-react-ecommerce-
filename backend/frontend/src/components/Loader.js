import React from 'react'
import { Spinner} from 'react-bootstrap'


function loader() {
  return (
    <div className="loader">
      <img src='/static/images/loader.gif' alt="Loading..." />
    </div>
  )
}

export default loader