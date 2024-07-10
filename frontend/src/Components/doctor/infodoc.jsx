import React , {useState} from 'react'
import star from "../../assets/star.png"
import doc1 from "../../assets/doc1.png"
import man from "../../assets/man.png"
import info from "../../assets/information.png"

import {useSelector} from "react-redux";


function infodoc({ isLoading } ) {

        // my states
        const [isAbout , setIsAbout] = useState(true);
        const [isReviewToggled , setIsReviewToggled] = useState(false);
        const [isBookToggled , setIsBookToggled] = useState(false);
        //my state handles
        const handleAbout = ()=> {
            setIsAbout(!isAbout);
        }
       
        const handleIsReviewToggled = ()=>{
            if(!isAbout)
                setIsReviewToggled(!isReviewToggled);
        }
    
        const handleIsBookToggled = ()=>{
            setIsBookToggled(!isBookToggled);
        } 

        // functions;
        const getCurrentDate = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(today.getDate()+1).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
        

        const todayDate = getCurrentDate();

        const GenerateTime = (min , max)=>{
            const optionsTime = [];
            for(let hour = min ; hour <= max ; hour++){
                const formattedHour = `${hour < 10 ? '0' : ''}${hour}:00`;
                optionsTime.push(formattedHour);
            }
            return optionsTime;
        }


        //redux state 
        const DocInfo = useSelector(state=>state.DocReducer.doctorInfo);
        const DocEducation = useSelector(state=>state.DocReducer.doctorEducation);
        const DocExperience = useSelector(state=>state.DocReducer.doctorExperience);
        const DocTime = useSelector(state=>state.DocReducer.doctorTime);


  return (
        <div className='flex flex-col gap-10 '>
            {isLoading ? <span
                className="loading loading-spinner loading-lg color-bookbutton absolute top-[30%] right-[40%]"></span> : DocInfo && DocInfo.Approved ?
                (
                    <>

                        <div className='flex justify-between z-1 relative'>
                    <div className='flex gap-5'>
                        <div className='color-bookbutton rounded-lg'>
                            <img className='w-44' src={DocInfo.photo} alt="" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col gap-3'>
                                <p className='poppins-bold text-xl'>Dr. {DocInfo.username}</p>
                                <p className='poppins-semibold color-bookbutton color-speciality self-start px-2 py-2 rounded-md'>{DocInfo.speciality}</p>
                                <div className='flex gap-2 items-center justify-start'>
                                    <img className='w-8' src={star} alt="" />
                                    <p className='poppins-semibold'>{DocInfo.averageRating}</p>

                                </div>
                                <p className='poppins-medium opacity-70'>Brain and nerve specialist</p>
                            </div>

                        </div>
                    </div>
                  <div className="bg-white flex flex-col gap-7 p-5 drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg absolute right-0">
                        <div className='flex flex-col gap-7'>
                            <div className='flex justify-between'>
                                <p className='poppins-bold text-lg'>Booking price</p>
                                <p className='poppins-bold text-lg'>{DocInfo.price} USD</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg poppins-medium'>Available Time Slots :</p>
                                <div className='flex justify-between gap-5'>
                                    <p className='poppins-medium opacity-70'>Monday to friday :</p>
                                    <p className='poppins-medium opacity-70'>{DocTime.StartTimeFM}-{DocTime.EndTimeFM}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='poppins-medium opacity-70'>Saturday :</p>
                                    <p className='poppins-medium opacity-70'>{DocTime.StartTimeSat}-{DocTime.EndTimeSat}</p>
                                </div>

                            </div>
                        </div>




                    </div>


                </div>
                <div className=' flex flex-col gap-2'>
                    <div className='flex gap-3'>
                        <span className='poppins-semibold text-lg cursor-pointer ' onClick={!isAbout ? handleAbout : null}>About</span>
                        <span className='poppins-semibold text-lg cursor-pointer ' onClick={isAbout ? handleAbout : null}>Reviews</span>
                    </div>
                    <hr className='border-solid border-2 border-black border-opacity-30'/>
                </div>

                {/* about */}

                <div  className = {`w-10/12 flex flex-col  gap-10 ${isAbout ? '' : 'hidden' }`} >
                    <div className='flex flex-col gap-5'>
                        <p className='text-bookbutton poppins-bold text-xl'>Dr. {DocInfo.username}</p>
                        <p className='poppins-medium opacity-70'>{DocInfo.bio}</p>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <p className='text-lg poppins-bold'>Education</p>
                        {DocEducation.map(education=>(
                            <>
                                <div className='flex flex-col gap-5 ml-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col'>
                                            <p className='text-sm poppins-bold text-bookbutton'>{education.StartEducation}-{education.EndEducation}</p>
                                            <p className='text-xs poppins-medium opacity-70'>{education.Degree}</p>
                                        </div>
                                        <p className='poppins-bold text-xs self-end'>{education.Location}</p>
                                    </div>
                            </div>

                            </>
                        ))}

                    </div>

                    <div className='flex flex-col gap-10'>
                        <p className='text-lg poppins-bold'>Experience</p>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-5'>
                            {DocExperience.map(experience=>(
                                <>
                                    <div className='color-bookbutton px-3 py-2 gap-5 flex flex-col rounded-lg'>
                                        <p className='color-speciality poppins-semibold text-sm'>{experience.StartExperience}-{experience.EndExperience}</p>
                                        <div className='flex flex-col gap-1'>
                                            <p className='poppins-medium color-speciality text-xs'>{experience.Position}</p>
                                            <p className='poppins-medium opacity-70 text-xs'>{experience.Location}</p>
                                        </div>
                                    </div>
                                </>
                            ))}


                        </div>
                    </div>

                </div>

                {/* reviews */}
                <div  className = {`flex flex-col gap-10 w-7/12 ${!isAbout ? '' : 'hidden' }`}>
                    {DocInfo && DocInfo.reviews.length > 0 ?
                        DocInfo.reviews.map(review=> (
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex gap-5'>
                                        <img className='w-11 rounded-full' src={review.Patient.photo} alt=""/>
                                        <div className='flex flex-col'>
                                            <p className='poppins-semibold'>{review.Patient.username}</p>
                                            <p className='poppins-medium opacity-70'>
                                                {review.Day}/{review.Month}/{review.Year}</p>
                                        </div>
                                    </div>
                                    <p className='poppins-medium text-sm ml-[70px]'>{review.Description}</p>
                                </div>

                                    <div className='flex gap-1 self-start' key={review._id}>
                                        {Array.from({ length: review.StarReview }, (_, index) => (
                                            <img key={index} className='w-4' src={star} alt="star" />
                                        ))}
                                    </div>

                            </div>
                        ))


                        : <p className="poppins-semibold opacity-70">You have no reviews</p>
                    }



                </div>
                </>
                )
            : <div className='bg-yellow-500 py-2 px-3 w-fit rounded-lg poppins-regular opacity-70 flex items-center justify-center gap-2'>
                    <img className='w-4 h-4' src={info} alt="" />
                    <p>Submit your complete informations in the settings and wait for approval within 3 days</p>
                </div>}

        </div>
  )
}

export default infodoc