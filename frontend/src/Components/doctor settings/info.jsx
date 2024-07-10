import React , {useEffect, useState} from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'
import Appointments from './appointments'
import arrow from "../../assets/next.png"
import Doc from '../doctor/infodoc'
import Payments from './payments'
import Delete from "./delete";
import Password from './password'
import Settings from './settings'

import lock from "../../assets/padlock.png";
import {useDispatch, useSelector} from "react-redux";
import {setView} from "../../Redux/Actions/ReduxActions.js";
import DocInfoHook from "../../Hooks/Doctor/DocInfoHook.js";
function info() {

    //my redux state
    const Selected = useSelector(state => state.ViewReducter);
    const dispatch = useDispatch();
    // my states
    const [selected , setSelected] = useState("overview");
    //my handles
    const handleSelect = (select)=>{
      setSelected(select)
    }

    //fetching
    const {loadingDocInfo} = DocInfoHook();
    const doctorInfo = useSelector(state => state.DocReducer.doctorInfo);
    const isApproved = doctorInfo ? doctorInfo.Approved : false;


   
  return (
    <div  className='color-main'>
            <div className='mx-36'>
                <Navbar isInside={false}/>  
                <div className=' pt-5 flex gap-10'>
                    
                    
                        <div className='flex flex-col w-1/4 gap-2'>
                            <button className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="Overview" ? 'speciality-background' : null }`} onClick={()=>dispatch(setView("Overview"))}>
                              <p>Overview</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="app" ? 'speciality-background' : null }`} onClick={isApproved ? ()=>dispatch(setView("app")) : null}>
                              <p>My Appointments</p>
                              <img className='w-5' src={isApproved ? arrow : lock} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="payments" ? 'speciality-background' : null }`} onClick={isApproved   ?  ()=>dispatch(setView("payments")) : null}>

                              <p>My Payments</p>
                              <img className='w-5' src={isApproved ? arrow : lock} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="password" ? 'speciality-background' : null }`} onClick={()=>dispatch(setView("password"))}>
                              <p>Change My Password</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="settings" ? 'speciality-background' : null }`} onClick={()=>dispatch(setView("settings"))}>
                              <p>My Settings</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${Selected ==="delete" ? 'speciality-background' : null }`} onClick={()=>dispatch(setView("delete"))} >
                              <p>Delete My Account</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                        </div>
                      <div className="w-full">
                      {Selected === "Overview" && <Doc isClient={false} isLoading={loadingDocInfo}/>}
                      {Selected === "app" && <Appointments isLoading={loadingDocInfo} />}
                      {Selected === "payments" && <Payments isLoading={loadingDocInfo}/>}
                      {Selected === "password" && <Password isLoading={loadingDocInfo} />}
                       {Selected === "settings" && <Settings isLoading={loadingDocInfo}/>}
                      {Selected === "delete" && <Delete isLoading={loadingDocInfo} />}
                      </div>
                      


          
                   
                    
                    
                </div> 
                <Footer/>
            </div>
    </div>
  )
}

export default info