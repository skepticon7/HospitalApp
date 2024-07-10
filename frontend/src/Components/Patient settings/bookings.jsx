
import pending from "../../assets/clock.png";
import request from "../../assets/schedule.png"
import accept from "../../assets/accept.png";
import decline from "../../assets/decline.png";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import NoApp from "../../assets/calendar.png";
import React from "react";
function bookings({isLoading}) {
    // redux state
    const PatientAppointments = useSelector(state=>state.ClientReducer.patientAppointments);

  return (
   <div  className='flex flex-col gap-6 w-full'>
    {isLoading ? <span
            className="loading loading-spinner loading-lg color-bookbutton absolute top-[30%] right-[40%]"></span> :
        PatientAppointments && PatientAppointments.length > 0 ?
            <>
                <p className='poppins-bold text-2xl'>My Booking</p>
            <table className="table-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] w-full rounded-lg" cellPadding={10} >
                <thead className='color-bookbutton poppins-bold text-lg'>
                    <tr className='text-left '>
                    <th style={{borderTopLeftRadius : "6px"}} >Doctor name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Service</th>
                    <th style={{borderTopRightRadius : "6px"}}>Status</th>
                    </tr>
                </thead>
                <tbody className='bg-white ' >
                    {PatientAppointments.map(app=>(
                            <tr>
                                <td className='poppins-semibold opacity-70 max-w-16  break-word break-words hover:underline'><Link to={"/Doctor/"+app.Doctor.username}>Dr. {app.Doctor.username}</Link> </td>
                                <td className='poppins-semibold opacity-70 '>{app.Day}/{app.Month}/{app.Year}</td>
                                <td className='poppins-semibold opacity-70'>{app.Time}</td>
                                <td className='poppins-semibold opacity-70 '>{app.Service}</td>
                                <td className=' break-words'>
                                    <div className='flex gap-1 items-center justify-start'>
                                    <img className='w-6' src={app.Status==="Confirmed" || app.Status==="Done"  ? accept : app.Status==="Requested" ? request  : app.Status === "Rejected" ? decline : null } alt="" />
                                    <p className='poppins-semibold '>{app.Status}</p>
                                    </div>
                                </td>
                                </tr>
                    ))}
                </tbody>
            </table>
        </>
        :
        <div className='flex flex-col items-center justify-center gap-5'>
            <img className='w-24' src={NoApp} alt="" />
            <p className='poppins-bold text-xl'>You Have no appointments currently</p>
        </div>
    }
        
      
    </div>


    
  )
}

export default bookings