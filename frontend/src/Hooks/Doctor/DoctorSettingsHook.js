import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
const useDoctorUpdatesHook = ()=>{
    const [loadingDocUpdate , setLoadingDocUpdate] = useState(null);

    const docUpdateSettings = async ({inputs})=>{
        
        try {
            setLoadingDocUpdate(true);
            const query = new URLSearchParams({type : "Doctor"});
            const requests = [
                axios.patch("api/updateDoctorSettings?"+query,{
                    doctorInfo : inputs.doctorTextInfo

                }),
                axios.post("api/PostTime?"+query , {
                    time : inputs.time
                }),
                inputs.educations.map((education)=>(
                    axios.post("api/PostEducation?"+query , {
                    education : education
                }))),
                inputs.experiences.map((experience)=>(
                    axios.post("api/PostExperience?"+query , {
                    experience : experience
                }))),
            ];
            await axios.all(requests).then(()=>{

                toast.success("successfully updated doctor data");
            }).catch(e=>{
                throw new Error(e);
            })
        } catch(error) {
            toast.error(error.message);
        } finally {
            setLoadingDocUpdate(false);
        }
    }
    return {loadingDocUpdate , docUpdateSettings}
}

export default useDoctorUpdatesHook;