import React from 'react'
import pending from "../../assets/clock.png"
import accept from "../../assets/accept.png";
import noMoney from "../../assets/currency.png";
import { useSelector } from 'react-redux';
function payments({isLoading}) {

    //my redux state
    const DocPayments = useSelector(state=>state.DocReducer.doctorPayments);

  return (
    <div className='flex flex-col gap-6 w-full'>
        {isLoading ? <span
                className="loading loading-spinner loading-lg color-bookbutton absolute top-[30%] right-[40%]"></span> :
            DocPayments.length > 0 ?
                <>
                    <p className='poppins-bold text-2xl'>My Payments</p>
                <table className="table-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] w-9/12 rounded-lg" cellPadding={10} >
                <thead className='color-bookbutton poppins-bold text-lg'>
                    <tr className='text-left '>
                    <th style={{borderTopLeftRadius : "6px"}} >Patient name</th>

                    <th >Price</th>
                    <th style={{borderTopRightRadius : "6px"}}>Status</th>
                    </tr>
                </thead>
                <tbody className='bg-white max-h-64' >
                    {DocPayments.map(pay=>(
                         <tr>
                            <td className='poppins-semibold opacity-70 max-w-16  break-word break-words'>{pay.Patient.username}</td>
                            <td className='poppins-semibold opacity-70 '>{pay.Price}$</td>
                            <td className=' break-words'>
                                <div className='flex gap-1 items-center justify-start'>
                                    <img className='w-6' src={pay.Status==="unpaid" ? pending : pay.Status==="payed" ? accept : null} alt="" />
                                    <p className='poppins-semibold '>{pay.Status === "unpaid" ? "Unpaid" : pay.status === "payed"  ? "Paid" : null}</p>

                                </div>
    
                            </td>
                     </tr>
                    ))}
                   
                    
                </tbody>
            </table>
            </> 
            : 
            <div className='flex flex-col items-center justify-center gap-5 '>
                <img className='w-24' src={noMoney} alt="" />
                <p className='poppins-bold text-xl'>You have no payments currently</p>
            </div>
        
        }

    </div>
   
  
// </div>
  )
}

export default payments