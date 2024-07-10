import React, {useEffect, useState} from 'react'
import star from "../../assets/star.png"
import SpecificDocHook from "../../Hooks/Doctor/SpecificDocHook.js";
import {useNavigate, useParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import {setDocInfo} from "../../Redux/Actions/ReduxActions.js";
import Doc from "./doc.jsx";
import App from "../../App.jsx";
import PostAppointmentHook from "../../Hooks/PostAppointmentHook.js";
import PostReviewHook from "../../Hooks/PostReviewHook.js";


function docBook() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //redux state

    const DocInfo = useSelector(state=>state.DocReducer.doctorInfo);
    const DocTime = useSelector(state=>state.DocReducer.doctorTime);
    const DocExperience = useSelector(state=>state.DocReducer.doctorExperience);
    const DocEducation = useSelector(state=>state.DocReducer.doctorEducation);

    //my states
    const [isAbout , setIsAbout] = useState(true);
    const [isReviewToggled , setIsReviewToggled] = useState(false);
    const [isBookToggled , setIsBookToggled] = useState(false);
    const [loadingSpecificDoc , setLoading] = useState(null);
    const [AppForm , setAppForm] = useState({
        selectedDate :"",
        selectedTime : ""
    });
    const [reviewForm , setReviewForm] = useState({
        StarNumber : null,
        Review : ""
    })

    //my params
    const {doctorName} = useParams()

    //my context
    const {AuthUser} = UseAuthContext();

    // my hooks
    const {loadingPostAppointment , postAppointment} = PostAppointmentHook();
    const {loadingPostReview , postReview} = PostReviewHook();
    useEffect(()=>{
        const getDoc = async (doctorName)=>{
            try {
                setLoading(true);
                const query = new URLSearchParams({type : "Patient" , doctorName : doctorName})
                const docData = await axios.get("/api/GetSpecificDoctor?"+query);
                if(docData.data.error)
                    throw new Error(docData.data.error);
                const data = {
                    DoctorInfo : docData.data.data,
                    DoctorExperience : docData.data.Exp,
                    DoctorEducation : docData.data.Edu,
                    DoctorTime :docData.data.time
                }
                dispatch(setDocInfo(data));
            } catch (error) {
                console.log("error fetching specific doc data : " , error);
                toast.error(error.message);
                navigate("/*")
            } finally {
                setLoading(false);
            }
        }
        getDoc(doctorName);
    },[]);


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

    const HandleAppForm = async (e)=>{
        e.preventDefault();
        const [y , m , d ] = AppForm.selectedDate.split("-");
        const inputs = {
           Time : AppForm.selectedTime,
           Date : {
               Year : y,
               Day : d,
               Month : m
           },
           Doctor : DocInfo._id,
           Service : DocInfo.speciality
        }
        await postAppointment(inputs);
    }

    const HandleReviewForm = async (e)=>{
        const currentDate = new Date();
        console.log(currentDate.getDate().toString());
        e.preventDefault();
        const inputs = {
            DoctorId : DocInfo._id,
            Day : currentDate.getDate().toString().padStart(2,'0'),
            Month : (currentDate.getMonth()+1).toString().padStart(2,'0'),
            Year : currentDate.getFullYear().toString(),
            StarReview : reviewForm.StarNumber,
            Rev : reviewForm.Review
        }

        await postReview(inputs);
    }

    // functions;
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()+1).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const splitTime = (time)=>{
        const [T , zero ] = time.split(":");
        return parseInt(T);
    }

    const CheckSaturday = (D) => {
        const day = new Date(D);
        if (day.getDay() === 6) {
            return true;
        }
        return false;
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




    return (
        <div className='flex flex-col gap-10 relative'>
            {loadingSpecificDoc ? <span className="loading loading-spinner loading-lg color-bookbutton absolute right-[50%] top-[5%]"></span> :

             DocInfo && DocTime && DocExperience && DocEducation ?

                 <>
                     <div className='flex justify-between z-1 relative'>
                         <div className='flex gap-5'>
                             <div className='color-bookbutton rounded-lg'>
                                 <img className='w-44' src={DocInfo.photo} alt=""/>
                             </div>
                             <div className='flex flex-col justify-between'>
                                 <div className='flex flex-col gap-3'>
                                     <p className='poppins-bold text-xl '>Dr. {DocInfo.username}</p>
                                     <p className='poppins-semibold color-bookbutton color-speciality self-start px-2 py-2 rounded-md'>{DocInfo.speciality}</p>
                                     <div className='flex gap-2 items-center justify-start'>
                                         <img className='w-8' src={star} alt=""/>
                                         <p className='poppins-semibold'>{DocInfo.averageRating}</p>

                                     </div>
                                     <p className='poppins-medium opacity-70'>Brain and nerve specialist</p>
                                 </div>

                             </div>
                         </div>


                         <div
                             className="bg-white flex flex-col gap-7 p-5 drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg absolute right-0">
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
                             {AuthUser && AuthUser.type==="Doctor" ? null :
                                 <>
                                     <button
                                         className={`secondary-button rounded-md py-2 poppins-semibold ${!isBookToggled ? '' : 'hidden'}`}
                                         onClick={handleIsBookToggled}>Book an appointment
                                     </button>
                                     <form onSubmit={HandleAppForm} className={`flex flex-col gap-5 ${isBookToggled ? '' : 'hidden'}`}>
                                         <div className='flex gap-5 items-center justify-start'>
                                             <label className='poppins-bold '>Date</label>
                                             <input type="date" min={todayDate} onChange={e=>setAppForm({...AppForm , selectedDate: e.target.value})}/>
                                         </div>
                                         <div className='flex gap-5 justify-start items-center'>
                                             <label className='poppins-bold '>Time</label>
                                             <select name="" id=""
                                                     className='py-2 px-4 border-none focus:outline-none self-center rounded-md'
                                                     onChange={e => setAppForm({
                                                         ...AppForm,
                                                         selectedTime: e.target.value
                                                     })} hidden={AppForm.selectedDate !== "" ? false : true}>
                                                 <option value="" disabled selected hidden></option>
                                                 {CheckSaturday(AppForm.selectedDate) ?
                                                     GenerateTime(splitTime(DocTime.StartTimeSat), splitTime(DocTime.EndTimeSat)).map((time, index) => (
                                                         <option key={index} value={time}>{time}</option>
                                                     ))
                                                     :
                                                     GenerateTime(splitTime(DocTime.StartTimeFM), splitTime(DocTime.EndTimeFM)).map((time, index) => (
                                                         <option key={index} value={time}>{time}</option>
                                                     ))
                                                 }

                                             </select>
                                         </div>
                                         <button type="submit" className='secondary-button rounded-md py-2 poppins-semibold'

                                                 onClick={() => {
                                                     if (!AuthUser) {
                                                         toast.error("You have to login first");
                                                     } else {
                                                         // Perform the action you want when the user is authenticated
                                                     }
                                                 }}

                                         >Request Appointment!
                                         </button>
                                     </form>
                                 </>


                             }
                                 </div>

                         </div>
                         <div className=' flex flex-col gap-2'>
                             <div className='flex gap-3'>
                            <span className='poppins-semibold text-lg cursor-pointer '
                                  onClick={!isAbout ? handleAbout : null}>About</span>
                                 <span className='poppins-semibold text-lg cursor-pointer '
                                       onClick={isAbout ? handleAbout : null}>Reviews</span>
                             </div>
                             <hr className='border-solid border-2 border-black border-opacity-30'/>
                         </div>

                         {/* about */}

                         <div className={`w-8/12 flex flex-col  gap-10 ${isAbout ? '' : 'hidden'}`}>
                             <div className='flex flex-col gap-5'>
                                 <p className='text-bookbutton poppins-bold text-xl'>Dr. {DocInfo.username}</p>
                                 <p className='poppins-medium opacity-70'>{DocInfo.bio}</p>
                             </div>
                             <div className='flex flex-col gap-10'>
                                 <p className='text-lg poppins-bold'>Education</p>
                                 {DocEducation.map(education => (
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
                                 {DocExperience.map(experience => (
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
                     <div className={`flex flex-col gap-10 w-7/12 ${!isAbout ? '' : 'hidden'}`}>
                         {DocInfo && DocInfo.reviews.length > 0 ?
                             DocInfo.reviews.map(review => (
                                 <div className='flex justify-between'>
                                     <div className='flex flex-col gap-5'>
                                         <div className='flex gap-5'>
                                             <img className='w-11' style={{borderRadius:"50%"}} src={review.Patient.photo} alt=""/>
                                             <div className='flex flex-col'>
                                                 <p className='poppins-semibold'>{review.Patient.username}</p>
                                                 <p className='poppins-medium opacity-70'>{review.Day}/{review.Month}/{review.Year}</p>
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


                             : <p className="poppins-semibold opacity-70">No reviews yet</p>
                         }

                         {AuthUser && AuthUser.type === "Doctor" ? null :
                             <div className='flex flex-col'>
                                 <button
                                     className={`secondary-button py-3 self-center px-3 rounded-lg poppins-semibold ${isReviewToggled ? 'hidden' : ''}`}
                                     onClick={handleIsReviewToggled}>Add a review
                                 </button>


                                 <form onSubmit={HandleReviewForm} className={`flex flex-col gap-8 ${isReviewToggled ? '' : 'hidden'}`}>
                                     <p className='poppins-medium'>How would you rate your overall experience with Dr. {DocInfo.username}?*</p>
                                     <div className='flex gap-1 self-start'>
                                         <div className="rating">
                                             <input type="radio" name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    onChange={e=>setReviewForm({...reviewForm , StarNumber: 1})}
                                             />
                                             <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked
                                                 onChange={e=>setReviewForm({...reviewForm , StarNumber: 2})}
                                             />
                                             <input type="radio" name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    onChange={e=>setReviewForm({...reviewForm , StarNumber: 3})}
                                             />
                                             <input type="radio" name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    onChange={e=>setReviewForm({...reviewForm , StarNumber: 4})}
                                             />
                                             <input type="radio" name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    onChange={e=>setReviewForm({...reviewForm , StarNumber: 5})}
                                             />
                                         </div>

                                     </div>
                                     <p className='poppins-medium'>Share your experience with others*</p>
                                     <textarea name="" id="" maxLength={300} placeholder='write your message'
                                               className='px-2 py-1 rounded-lg poppins-medium border-bookbutton focus:outline-none'
                                               onChange={e => setReviewForm({
                                                   ...reviewForm,
                                                   Review: e.target.value
                                               })}></textarea>
                                     <button
                                         type="submit"
                                         className='secondary-button self-center py-3 px-3 rounded-lg poppins-semibold'

                                         onClick={() => {
                                             if (!AuthUser) {
                                                 toast.error("You have to login first");
                                             } else {

                                             }
                                         }}

                                     >Submit review
                                     </button>
                                 </form>
                             </div>

                         }


                     </div>

                 </>

                 : <p>Error getting the doctor data</p>

            }


        </div>
    )
}

export default docBook;