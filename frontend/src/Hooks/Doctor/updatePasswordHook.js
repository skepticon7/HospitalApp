import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdatePasswordHook = ()=>{
    const [loadingPasswordUpdate , setLoadingPasswordUpdate] = useState(null);
    const updatePassword  = async (inputs,type)=>{
        const CheckFailure = CheckPassword(inputs);
        if(!CheckFailure) return;
        try {
            setLoadingPasswordUpdate(true);
            const query = new URLSearchParams({type : type})
            const data = await axios.post("/api/UpdatePassword?"+query,{
                
                oldPassword : inputs.oldPassword,
                newPassword : inputs.newPassword
            });
            if(data.data.error)
                throw new Error(data.data.error)
            toast.success(data.data.msg);
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoadingPasswordUpdate(false);
        }
    }   
    return {loadingPasswordUpdate , updatePassword}
   
}

const CheckPassword = (inputs)=>{
    if(!inputs.oldPassword || !inputs.newPassword || !inputs.confirmedPassword) {
        toast.error("please fill in the fields");
        return false;
    }else if (inputs.newPassword !== inputs.confirmedPassword) {
        toast.error("Passwords do not match");
        return false;
    }else if(inputs.newPassword.length < 6) {
        toast.error("password must be at least 7 characters");
        return false;
    }
    return true;
}

export default UpdatePasswordHook;