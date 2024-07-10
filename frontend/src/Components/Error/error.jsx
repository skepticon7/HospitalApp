import React from 'react'
import {Link} from "react-router-dom"
function error() {
  return (
    <>
        <div>404 - PAGE NOT FOUND</div>
        <Link to="/">return to home page</Link>
    </>
    

  )
}

export default error