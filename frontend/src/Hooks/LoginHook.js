import {toast} from "react-hot-toast";
import { useState } from "react";
import { UseAuthContext } from "../Context/AuthContext";

const LoginHook = ()=>{
    const [loadingLogin , setLoading] = useState(null);
    const {setAuthUser} = UseAuthContext();
    const login = async (inputs) =>{
        const SuccessOrFailure = checkSuccess(inputs);
        if(!SuccessOrFailure) return;
        try {
            setLoading(true);
            const res = await fetch("/api/login",{
                method:"POST",
                headers:{"content-type" : "application/json"},
                body:JSON.stringify(inputs)
            });
            const data = await res.json();
            if(data.error)
                throw new Error(data.error);
            localStorage.setItem("auth-user",JSON.stringify(data));
            toast.success("successfully logged in");
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingLogin , login};
}

const checkSuccess = (inputs)=>{
    if(!inputs.username || !inputs.password || !inputs.type){
        toast.error("Please fill in the fields");
        return false;
    }
    return true;
}

export default LoginHook;