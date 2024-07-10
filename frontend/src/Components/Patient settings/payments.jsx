import React from 'react'
import request from "../../assets/clock.png";
import accept from "../../assets/accept.png";
import { useSelector } from 'react-redux';
import NoMoney from "../../assets/currency.png";
import {Link} from "react-router-dom";

function payments({isLoading}) {
    // my redux states
    const PatientPayments = useSelector(state=>state.ClientReducer.patientPayments);

  return (
    <div  className='flex flex-col gap-6 w-full'>
    {isLoading ? <span
            className="loading loading-spinner loading-lg color-bookbutton absolute top-[30%] right-[40%]"></span> :
        PatientPayments && PatientPayments.length > 0 ?
            <>
                <p className='poppins-bold text-2xl'>My Payments</p>
            <table className="table-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] w-9/12 rounded-lg" cellPadding={10} >
                    <thead className='color-bookbutton poppins-bold text-lg'>
                    <tr className='text-left '>
                    <th style={{borderTopLeftRadius : "6px"}} >Doctor name</th>
                    <th >Price</th>
                    <th style={{borderTopRightRadius : "6px"}}>Status</th>
                    </tr>
                </thead>
                <tbody className='bg-white ' >
                    {PatientPayments.map(pay=>(
                        <tr>
                         <td className='poppins-semibold opacity-70 max-w-16  break-word break-words hover:underline'><Link to={"/Doctor/"+pay.Doctor.username}> Dr. {pay.Doctor.username}</Link></td>
                         <td className='poppins-semibold opacity-70 '>{pay.Price}$</td>
                         <td className=' break-words'>
                             <div className='flex gap-1 items-center justify-start'>
                                 <img className='w-6' src={pay.Status === "paid" ? accept : pay.Status === "unpaid" ? request : null  } alt="" />
                                 <p className='poppins-semibold '>{pay.Status === "paid" ? "Paid" : pay.Status === "unpaid" ? "Unpaid" : null  }</p>
                         </div>

                      </td>
                     </tr>
                    ))}

                </tbody>
            </table>
        </>
        :
        <div className='flex flex-col items-center justify-center gap-5'>
            <img className='w-24' src={NoMoney} alt="" />
            <p className='poppins-bold text-xl'>You Have no payments currently</p>
        </div>
    }
        
      
    </div>


  )
}

export default payments