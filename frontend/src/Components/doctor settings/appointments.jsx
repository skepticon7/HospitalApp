import React , {useState} from 'react'
import request from "../../assets/schedule.png";
import pending from "../../assets/clock.png"
import accept from "../../assets/accept.png";
import reject from "../../assets/decline.png"
import NoApp from "../../assets/calendar.png";
import { useSelector } from 'react-redux';
 function appointments({isLoading}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // redux state
    const DocAppointments = useSelector(state=>state.DocReducer.doctorAppointments);

  
  return (
    <div  className='flex flex-col gap-6 w-full'>
        {isLoading ? <span
                className="loading loading-spinner loading-lg color-bookbutton absolute top-[30%] right-[40%]"></span> :
            DocAppointments.length > 0 ?
                <>
                    <p className='poppins-bold text-2xl'>My Appointments</p>
                <table className="table-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] w-full rounded-lg relative" cellPadding={10} >
                <thead className='color-bookbutton poppins-bold text-lg'>
                    <tr className='text-left '>
                    <th style={{borderTopLeftRadius : "6px"}} >Patient name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th style={{borderTopRightRadius : "6px"}}>Status</th>
                    </tr>
                </thead>
                <tbody className='bg-white ' >
                    {DocAppointments.map(app=>(
                        <>
                            {app.Status !== "Rejected" && <tr>
                                <td className='poppins-semibold opacity-70 max-w-16  break-word break-words'>{app.Patient.username}</td>
                                <td className='poppins-semibold opacity-70 '>{app.Day}/{app.Month}/{app.Year}</td>
                                <td className='poppins-semibold opacity-70'>{app.Time}</td>
                                {app.Status !== "Requested" ?
                                    <td className=' break-words'>
                                        <div className='flex gap-1 items-center justify-start'>
                                            <img className='w-6'
                                                 src={app.Status === "Confirmed" ? pending : app.Status === "Done" ? accept : null}
                                                 alt="status"/>

                                            <p className='poppins-semibold '>{app.Status === "Confirmed" ? "Scheduled" : app.Status === "Done" ? "Passed" : null}</p>
                                        </div>

                                    </td>
                                    :
                                    <td className=' break-words'>
                                        <div className='flex gap-1 items-center justify-start'>
                                            <img className='w-6' src={request} alt="status"/>
                                            <p className='poppins-semibold '>Requested</p>
                                        </div>
                                    </td>
                                }

                            </tr>}

                        </>
                    ))}


                </tbody>
                </table>
            </>
                :
                <div className='flex flex-col items-center justify-center gap-5 self-center'>
                    <img className='w-24' src={NoApp} alt=""/>
                    <p className='poppins-bold text-xl'>You Have no appointments currently</p>
                </div>

        }


    </div>
  )
 }

export default appointments