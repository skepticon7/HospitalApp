import React, {useEffect, useState} from 'react'
import Navbar from "../navbar/navbar";
import HeroText from '../Hero/HeroText';
import HeroImages from '../Hero/HeroImages';
import Info from '../1stSection/section1';
import Services from '../2ndSection/section2';
import Staff from '../staff/staff';
import Footer from '../Footer/footer';
import HighestDocsHook from "../../Hooks/Doctor/HighestDoctorsHook.js";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
import DocInfoHook from "../../Hooks/Doctor/DocInfoHook.js";
import PatientInfoHook from "../../Hooks/Patient/PatientInfoHook.js";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
function home() {
    //my hooks
    const {loadingHighestDocs} = HighestDocsHook();



    //my context
    const {AuthUser} = UseAuthContext();
    if(AuthUser && AuthUser.type === "Doctor") {
        DocInfoHook();
    }else if(AuthUser && AuthUser.type === "Patient") {
        PatientInfoHook();
    }

    //my redux state
    const Selected = useSelector(state=>state.ViewReducter);



  return (
    <div>
        <div  className='color-main'>
          <div className='mx-36'>
            <Navbar/>
            <div  className='flex gap-20 py-10'>
                <HeroText/>
                <HeroImages/>
            </div>
            <Info/>
            <Services/>
            <Staff isLoading={loadingHighestDocs}/>
            <Footer/>
          </div>  
      </div>
    </div>
  )
}

export default home