import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'
import Infodoc from './infodoc';
import {UseAuthContext} from "../../Context/AuthContext.jsx";
import DocBook from "./docBook.jsx";
function doc() {
  //my context
  const {AuthUser} = UseAuthContext();


  return (
    <div  className='color-main'>
        <div className='mx-36  flex flex-col gap-10'>
            <Navbar/>
            <DocBook></DocBook>
            <Footer/>
        </div>
    </div>
  )
}

export default doc