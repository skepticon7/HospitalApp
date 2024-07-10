import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PostAppointmentHook = ()=>{
    const [loadingPostAppointment, setLoading] = useState(null);
    const postAppointment = async (inputs)=>{
        try {
            setLoading(true);
            const query = new URLSearchParams({type : "Patient"})
            const Res = await axios.post("/api/MakeAppointment?"+query , {
                AppInfo : inputs
            });
            if(Res.data.error)
                throw new Error(Res.data.error);
            toast.success("Appointment requested !!");
        }catch (error) {
            console.log("error posting appointment : " + error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingPostAppointment, postAppointment}
}

export default PostAppointmentHook;