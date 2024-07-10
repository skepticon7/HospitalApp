import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
const usePatientUpdatesHook = ()=>{
    const [loadingPatientUpdate , setLoadingPatientUpdate] = useState(null);
    const {AuthUser,setAuthUser} = UseAuthContext();
    const patientUpdateSettings = async (inputs,type)=>{
        try {

            setLoadingPatientUpdate(true);
            const query = new URLSearchParams({type : type});
            const data = await axios.patch("/api/updatePatientSettings?"+query,{
                patientInfo : inputs
            });
            if(data.data.error)
                throw new Error(data.data.error);

            toast.success(data.data.msg);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setLoadingPatientUpdate(false);
        }
    }
    return {loadingPatientUpdate , patientUpdateSettings}
}

export default usePatientUpdatesHook;