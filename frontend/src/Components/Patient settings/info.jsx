import React , { useState } from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import Bookings from './bookings';
import arrow from "../../assets/next.png"
import Payments from "./payments";
import Settings from './settings';
import Password from './password';
import Delete from "./delete";
import PatientInfoHook from '../../Hooks/Patient/PatientInfoHook';
function info() {
  // my states
  const [selected , setSelected] = useState("bookings");
  //my handles
  const handleSelect = (select)=>{
    setSelected(select)
  }

  //my hooks
  const {loadingPatientInfo} = PatientInfoHook();
  return (
   
    <div  className='color-main'>
            <div className='mx-36'>
                <Navbar isInside={false}/>  
                <div className='flex pt-16 gap-10 items-start'>
                    
                    
                        <div className='flex flex-col w-1/4 gap-2'>
                            <button className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${selected ==="bookings" ? 'speciality-background' : null }`} onClick={()=>handleSelect("bookings")}>
                              <p>My Bookings</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${selected ==="payments" ? 'speciality-background' : null }`} onClick={()=>handleSelect("payments")}>
                              <p>My Payments</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${selected ==="settings" ? 'speciality-background' : null }`} onClick={()=>handleSelect("settings")}>
                              <p>My Settings</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${selected ==="change" ? 'speciality-background' : null }`} onClick={()=>handleSelect("change")}>
                              <p>Change password</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                            <button  className = {`secondary-button py-4  poppins-semibold rounded-md flex justify-between px-5 ${selected ==="delete" ? 'speciality-background' : null }`} onClick={()=>handleSelect("delete")} >
                              <p>Delete My Account</p>
                              <img className='w-5' src={arrow} alt="" />
                            </button>
                        </div>
                      <div className="w-full">
                      {selected === "bookings" && <Bookings isLoading={loadingPatientInfo}/>}
                      {selected === "payments" && <Payments isLoading={loadingPatientInfo} />}
                      {selected === "settings" && <Settings isLoading={loadingPatientInfo} />}
                      {selected === "change" && <Password />}
                      {selected === "delete" && <Delete />}
                      </div>
                      


          
                   
                    
                    
                </div> 
                <Footer/>
            </div>
    </div>
  )
}

export default info