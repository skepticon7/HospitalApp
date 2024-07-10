import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AcceptAppHook = ()=>{
    const [loadingAcceptApp , setLoadingAcceptApp] = useState(null);

    const AcceptApp = async (Appid  , PatientId , price )=>{
        console.log(Appid , PatientId , price)
        try{
            setLoadingAcceptApp(true);
            const query = new URLSearchParams({type : "Doctor"});
            const Res = await axios.post("/api/AcceptAppointment?"+query,{
                AppId : Appid,
                PatientId : PatientId,
                price : price
            });
            if(Res.data.error)
                throw new Error(Res.data.error);
            toast.success(Res.data.msg);
        }catch (error){
            console.log("error accepting appointment in the hook");
            toast.error(error.message);
        }finally {
            setLoadingAcceptApp(false);
        }
    }
    return {loadingAcceptApp , AcceptApp}
}



export const RejectAppHook = ()=>{
    const [loadingRejectApp , setLoadingRejectApp] = useState(null);
    const RejectApp = async (id )=>{
        try{
            setLoadingRejectApp(true);
            const query = new URLSearchParams({type : "Doctor"});
            const Res = await axios.post("/api/RejectAppointment?"+query,{
                AppId : id
            });
            if(Res.data.error)
                throw new Error(Res.data.error);
            toast.error(Res.data.msg);
        }catch (error){
            console.log("error accepting appointment in the hook");
            toast.error(error.message);
        }finally {
            setLoadingRejectApp(false);
        }
    }
    return {loadingRejectApp , RejectApp};
}