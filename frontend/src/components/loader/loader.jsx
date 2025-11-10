import React from 'react'

import "./loader.css"
import { useSelector } from 'react-redux'

export default function Loader() {
    const isLoading=useSelector(state=>state.auth.isLoader)
   
    
  return (
    <div className='d-flex justify-content-center align-items-center w-100 loads'>
        <div className="loader"></div>
    </div>
  )
}
