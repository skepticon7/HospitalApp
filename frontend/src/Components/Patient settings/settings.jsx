import React , {useState} from 'react'
import icon from "../../assets/man.png"
import {useSelector} from "react-redux";
import useUploadPictureToCloudinary from "../../utils/uploadImage.js";
import usePatientUpdatesHook from "../../Hooks/Patient/PatientSettingsHook.js";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
function settings() {

    //my auth from localStorage;
    const {AuthUser} = UseAuthContext();

    //my upload image hook
    const {uploadPictureToCloudinary , loadingUploadImage} = useUploadPictureToCloudinary();

    //my update hook
    const {loadingPatientUpdate , patientUpdateSettings} = usePatientUpdatesHook();

    //my redux state
    const patientInfo = useSelector(state => state.ClientReducer.patientInfo);
    const [patientFormSettings , setPatientFormSettings] = useState({
        username : patientInfo && patientInfo.username ? patientInfo.username : "",
        email : patientInfo && patientInfo.email ? patientInfo.email : "",
        photo : patientInfo && patientInfo.photo ? patientInfo.photo : "",
    })

    //my state
    const [fileName, setFileName] = useState('');


    //my handles
    const handleFileChange = async (event) => {
      if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
        const file = await uploadPictureToCloudinary(event.target.files[0]);
        setPatientFormSettings({...patientFormSettings , photo: file.secure_url});
      } else {
        setFileName('');
      }
    };

    const handleUpdate = async ()=>{
        await patientUpdateSettings(patientFormSettings , AuthUser.type);
    }


  return (
    <div className='flex flex-col gap-6 w-full'>
        <p className='poppins-bold text-2xl'>My Settings</p>
        <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold '>Username<span className="text-red-600">*</span></label>
                <input type="text" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={patientFormSettings.username} onChange={e=>({...patientFormSettings , username : e.target})}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='poppins-semibold'>Email<span className="text-red-600">*</span></label>
                <input type="text" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' defaultValue={patientFormSettings.email} onChange={e=>({...patientFormSettings , email : e.target.value})}/>
            </div> 
            <div className='flex flex-col gap-2'>
                <label  className='poppins-semibold' >Profile Picture<span className="text-red-600">*</span></label>
                <div className='flex gap-2 items-center justify-start'>
                    <img className='w-16 h-16 rounded-full' src={patientFormSettings.photo ? patientFormSettings.photo  : icon } alt="" />
                    <input type="file" id="files" class="hidden" onChange={handleFileChange}/>
                    <label for="files" className='poppins-semibold rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent'  >{fileName ? fileName :"Upload picture"}</label>
                </div>
            </div>  
                  
        </div>
        <button className='secondary-button py-3 self-center px-3 rounded-lg poppins-semibold' onClick={handleUpdate}>{loadingPatientUpdate ? "Loading" : "Update settings"}</button>
    </div>
  )
}

export default settings