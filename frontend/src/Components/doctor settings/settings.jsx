import React , {useState} from 'react'
import icon from "../../assets/man.png"
import { useSelector } from 'react-redux';
import useUploadPictureToCloudinary from '../../utils/uploadImage';
import useDoctorUpdatesHook from '../../Hooks/Doctor/DoctorSettingsHook';
function settings() {

    //my hookes
    const {loadingDocUpdate , docUpdateSettings} = useDoctorUpdatesHook();

    //redux state 
    const DoctorInfo = useSelector(state=>state.DocReducer.doctorInfo);
    const DoctorTime = useSelector(state=>state.DocReducer.doctorTime);
    const DoctorExperience = useSelector(state=>state.DocReducer.doctorExperience);
    const DoctorEducation = useSelector(state=>state.DocReducer.doctorEducation);
    // console.log(DoctorTime);
    // console.log(DoctorExperience);
    // console.log(DoctorInfo);
    // console.log(DoctorEducation);
    //my states
    const [fileName, setFileName] = useState('');
    
    const [experiences, setExperiences] = useState(DoctorExperience.map(experience=>({
        _id : experience._id,
        startDate :experience.StartExperience,
        endDate : experience.EndExperience,
        position : experience.Position,
        institute : experience.Location
    })));
    const [educations, setEducations] = useState(DoctorEducation.map(education=>({
        _id : education._id,
        startDate :education.StartEducation,
        endDate : education.EndEducation,
        degree : education.Degree,
        institute : education.Location
    })));
    // const [startFM , setStartFM] = useState(DoctorTime ? DoctorTime.StartTimeFM : "09:00");
    // const [endFM  , setEndFM] = useState(DoctorTime ? DoctorTime.EndTimeFM : "22:00");
    // const [startSat , setStartSat] = useState(DoctorTime ? DoctorTime.StartTimeSat : "09:00");
    // const [endSat , setEndSat] = useState(DoctorTime ? DoctorTime.EndTimeSat : "14:00");
    const [Time , setTime] = useState(DoctorTime ? {  
        _id : DoctorTime._id,
        StartTimeFM : DoctorTime.StartTimeFM,
        EndTimeFM : DoctorTime.EndTimeFM,
        StartTimeSat : DoctorTime.StartTimeSat,
        EndTimeSat : DoctorTime.EndTimeSat} :
        {
            StartTimeFM : "09:00",
            EndTimeFM : "22:00",
            StartTimeSat : "09:00",
            EndTimeSat : "14:00"
        }
    );
    const [FormSet , setFormSet] = useState({
        username : DoctorInfo ? DoctorInfo.username : "",
        email : DoctorInfo ? DoctorInfo.email : "",
        bio : DoctorInfo ? DoctorInfo.bio : "",
        rib : DoctorInfo ? DoctorInfo.rib : "",
        price : DoctorInfo ? DoctorInfo.price : "",
        speciality :DoctorInfo && DoctorInfo.speciality ? DoctorInfo.speciality : "Neurology",
        photo : DoctorInfo ? DoctorInfo.photo : ""
    })

    const {loadingUploadImage ,uploadPictureToCloudinary } = useUploadPictureToCloudinary();

    // my handles
    const addExperience = () => {
        setExperiences([...experiences, { startDate: '', endDate: '', position: '', institute: '' }]);
      };
    
      const addEducation = () => {
        setEducations([...educations, {  startDate: '', endDate: '', degree: '', institute: '' }]);
      };

      const handleExperienceChange = (index, field, value) => {
        const newExperiences = experiences.slice();
        newExperiences[index][field] = value;
        setExperiences(newExperiences);
      };
    
      const handleEducationChange = (index, field, value) => {
        const newEducations = educations.slice();
        newEducations[index][field] = value;
        setEducations(newEducations);
      };

    const handleFileChange = async (event) => {
      if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
        const file = event.target.files[0];
            const data = await uploadPictureToCloudinary(file);
            setFormSet({...FormSet , photo : data.secure_url});
 
        
      } else {
        setFileName('');
      }
    };

    const GenerateTime = (min , max)=>{
        const optionsTime = [];
        for(let hour = min ; hour <= max ; hour++){
            const formattedHour = `${hour < 10 ? '0' : ''}${hour}:00`;
            optionsTime.push(formattedHour);
        }
        return optionsTime;
    }

    const GenerateDate = ()=>{
        const Dates = [];
        for(let i=2024 ; i>=1950 ; i--) {
            Dates.push(i);
        } 
        return Dates;
    }

    const HandleStartFM = (event)=>{
        setStartFM(event.target.value)
    }
    const HandleEndFM = (event)=>{
        setEndFM(event.target.value)
    }
    const HandleStartSat = (event)=>{
        setStartSat(event.target.value)
    }
    const HandleEndSat = (event)=>{
        setEndSat(event.target.value)
    }



    const HandleUpdate =  async ()=>{
        const inputs = {
            experiences :  experiences,
            educations : educations,
            time : Time,
            doctorTextInfo : FormSet,
        }
        console.log(inputs);
        await docUpdateSettings({inputs},);
    }



  return (
    <div className='flex flex-col gap-10 w-full'>
        <p className='poppins-bold text-2xl'>My Settings</p>
        <div className='grid grid-cols-2 gap-x-5 gap-y-7'>
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold'>Username<span className="text-red-600">*</span></label>
                <input type="text" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={FormSet.username} onChange={e=>setFormSet({...FormSet , username :e.target.value})}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold'>Email<span className="text-red-600">*</span></label>
                <input type="text" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={FormSet.email}  onChange={e=>setFormSet({...FormSet , email :e.target.value})}/>
            </div> 
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold'>Bio<span className="text-red-600">*</span></label>
                <textarea maxLength={400} placeholder='write your message' className='px-2 py-1 rounded-lg poppins-medium border-black border-solid border-[3px] focus:outline-none' defaultValue={FormSet.bio}  onChange={e=>setFormSet({...FormSet , bio :e.target.value})}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold'>Bank Account<span className="text-red-600">*</span></label>
                <input type="text" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={FormSet.rib} onChange={e=>setFormSet({...FormSet , rib :e.target.value})}/>
            </div> 
            <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-2 w-5/12'>
                    <label className='poppins-semibold'>Speciality<span className="text-red-600">*</span></label>
                    
                    <select name="" id="" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={ FormSet.speciality} onChange={(e)=>setFormSet({...FormSet , speciality : e.target.value})}>
                        <option value="Neurology" >Neurology</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Ophtalmology">Ophtalmology</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Pediatrics">Pediatrics</option>
                    </select>
                </div> 
                <div className='flex flex-col gap-2 w-5/12'>
                    <label className='poppins-semibold'>Booking Price<span className="text-red-600">*</span></label>
                    <input type="Number" className='rounded-md  border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={FormSet.price}  onChange={e=>setFormSet({...FormSet , price :e.target.value})}/>
                </div> 
            </div>
            <div className='grid row-span-1 gap-y-2'>
                <p className='poppins-semibold'>Time Slots :</p>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3 '>
                        <p className='bg-black py-4 poppins-semibold w-1/3 text-center self-center rounded-md text-white'>Monday-Friday</p>
                            <select name="" id="" className='border-black border-[3px]  py-3 px-3 border-solid w-1/3 self-center rounded-md' value={Time.StartTimeFM} onChange={(e)=>setTime({... Time, StartTimeFM : e.target.value})}>
                            {GenerateTime(9, 22).map((time, index) => (
                                    <option key={index} value={time}   disabled={time > Time.EndTimeFM ? true  : false}>{time}</option>
                            ))}
                            </select>
                            <select name="" id="" className='border-black border-[3px]  py-3 px-3 border-solid w-1/3 self-center rounded-md' value={Time.EndTimeFM} onChange={(e)=>setTime({... Time, EndTimeFM : e.target.value})}>
                            {GenerateTime(9, 22).map((time, index) => (
                                    <option key={index} value={time} disabled={ time <= Time.StartTimeFM ? true : false}>{time}</option>
                            ))}
                             </select>
                    </div>
                    <div className='flex gap-3 '>
                        <p className='bg-black py-4 px-3 poppins-semibold w-1/3 text-center self-center rounded-md text-white'>Saturday</p>
                        <select name="" id="" className='border-black border-[3px]  py-3 px-3 border-solid w-1/3 self-center rounded-md' value={Time.StartTimeSat} onChange={(e)=>setTime({... Time, StartTimeSat : e.target.value})}>
                            
                                    <option  value={Time.StartTimeSat} >{Time.StartTimeSat}</option>
                            
                        </select>
                        <select name="" id="" className='border-black border-[3px]  py-3 px-3 border-solid w-1/3 self-center rounded-md' value={Time.EndTimeSat} onChange={(e)=>setTime({... Time, EndTimeSat : e.target.value})}>
                            {GenerateTime(10, 14).map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid col-span-2 gap-y-1'>
                <div className="flex flex-col">
                    <label className='poppins-semibold py-4 px-3'>Profile Picture<span className="text-red-600">*</span></label>
                    <div className='flex gap-2 items-center justify-start'>
                        {loadingUploadImage ? <p>loading...</p> : <img className=' w-16 h-16 rounded-full'
                                                                       src={DoctorInfo && DoctorInfo.photo ? DoctorInfo.photo : icon}
                                                                       alt=""/>}

                        <input type="file" id="files" className="hidden" onChange={handleFileChange}/>
                        <label htmlFor="files"
                               className='poppins-semibold rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent'>{fileName ? fileName : "Upload picture"}</label>
                    </div>
                </div>

            </div>
            <div className="grid row-span-2">
                <div className='flex flex-col gap-5 '>
                    <button className='secondary-button self-start  px-3 py-4 rounded-md poppins-semibold'
                            onClick={addExperience}>Add Experience
                    </button>
                    {experiences.map((experience, index) => (
                        <>
                            <p className='poppins-semibold'>Experience {index + 1}</p>
                            <div className="flex flex-col gap-5" key={index}>
                                <div className='flex  gap-5'>
                                    <select
                                        className='border-black border-[3px]  py-3 px-3 border-solid w-2/3 self-center rounded-md' name="" id="" defaultValue={experience.startDate} value={experiences['startDate']} onChange={(e)=>handleExperienceChange(index , 'startDate' , e.target.value)}>
                                    {GenerateDate().map((date, idx) => (
                                            <option key={idx} value={date} disabled={date > experience.endDate ? true  : false}>{date}</option>
                                        ))}
                                </select>
                                <select className='border-black border-[3px]  py-3 px-3 border-solid w-2/3 self-center rounded-md' name="" id=""  defaultValue={experience.endDate} value={experiences['endDate']} onChange={(e)=>handleExperienceChange(index , 'endDate' , e.target.value)}>
                                    <option value="Present">Present</option>
                                    {GenerateDate().map((date, idx) => (
                                            <option key={idx} value={date} disabled={date < experience.startDate ? true : false }>{date}</option>
                                        ))}
                                </select>
                            </div>
                            <div className='flex gap-5'>
                                <input
                                className='border-black border-[3px] py-3 px-3  border-solid self-center rounded-md w-2/3'
                                type="text"
                                defaultValue={experience.position}
                                onChange={(e) => handleExperienceChange(index ,  'position', e.target.value)}
                                placeholder="Degree/Position"
                                required
                                />
                                <input
                                className='border-black border-[3px] py-3 px-3  border-solid self-center rounded-md w-2/3'
                                type="text"
                                defaultValue={experience.institute}
                                onChange={(e) => handleExperienceChange(index ,  'institute', e.target.value)}
                                placeholder="Institute/Company"
                                required
                                />
                            </div>
                        </div>
                        </>
                        ))}
                </div>
                
            </div>  
            <div className="grid row-span-2">
                <div className='flex flex-col gap-5 '>   
                    <button className='secondary-button self-start  px-3 py-4 rounded-md poppins-semibold' onClick={addEducation}>Add Education</button>
                    {educations.map((education , index) => (
                        <>
                        <p className='poppins-semibold text'>Education {index+1}</p>
                        <div className="flex flex-col gap-5" key={education.id}>
                            <div className='flex  gap-5'>
                            <select className='border-black border-[3px]  py-3 px-3 border-solid w-2/3 self-center rounded-md' name="" id="" defaultValue={education.startDate} value={educations['startDate']} onChange={(e)=>handleEducationChange(index , 'startDate' , e.target.value)}>
                                    {GenerateDate().map((date , index)=>(
                                        <option  key={index} value={date} disabled={date > education.endDate ? true  : false}>{date}</option>
                                    ))}
                                </select>
                                <select className='border-black border-[3px]  py-3 px-3 border-solid w-2/3 self-center rounded-md' name="" id="" defaultValue={education.endDate} value={educations['endDate']} onChange={(e)=>handleEducationChange(index , 'endDate' , e.target.value)}>
                                    {GenerateDate().map((date , index)=>(
                                        <option  key={index} value={date} disabled={date < education.startDate ? true : false}>{date}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex gap-5'>
                                <input
                                className='border-black border-[3px] py-3 px-3  border-solid self-center rounded-md w-2/3'
                                type="text"
                                defaultValue={education.degree}
                                onChange={(e) => handleEducationChange(index ,  'degree', e.target.value)}
                                placeholder="Degree/Major"
                                required
                                />
                                <input
                                className='border-black border-[3px] py-3 px-3  border-solid self-center rounded-md w-2/3'
                                type="text"
                                defaultValue={education.institute}
                                onChange={(e) => handleEducationChange(index , 'institute', e.target.value)}
                                placeholder="College/University"
                                required
                                />
                            </div>
                        </div>
                        </>
                        ))}
                </div>
                
            </div>  
        </div>
        <button className='secondary-button py-3 px-3 self-center rounded-lg poppins-semibold' onClick={HandleUpdate}>{loadingDocUpdate ? "loading" : "Update Settings" }</button>
    </div>
  )
}

export default settings