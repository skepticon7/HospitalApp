import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";


const SignupHook = ()=>{
    const [loadingSignup , setLoading] = useState(null);
   
    const signup = async (inputs)=>{
        const successOrFailure = checkFailure(inputs); 
        console.log(inputs);
        if(!successOrFailure) return;
        try {
            setLoading(true);
            const res = await fetch("/api/signup",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(inputs)
            })
            const data = await res.json();
            if(data.error)
                throw new Error(data.error);
            toast.success("Successfully registered");
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingSignup , signup};
}

const checkFailure = (inputs)=>{
    if(!inputs.username || !inputs.password || !inputs.gender || !inputs.email || !inputs.type)
        {
            toast.error("Please fill all the fields");
            return false;
        }
    else if(inputs.password.length < 6) {
        toast.error("Password must be at least  6 characters");
        return false;
    }
    return true;
}

export default SignupHook;