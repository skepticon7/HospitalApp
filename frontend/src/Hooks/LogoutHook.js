import {toast} from "react-hot-toast";
import { useState } from "react";
import { UseAuthContext } from "../Context/AuthContext";
import {setDocNull , setClientNull} from "../Redux/Actions/ReduxActions.js";
import axios from "axios";
import {useDispatch} from "react-redux";

const LogoutHook = ()=>{
    const dispatch = useDispatch();
    const [loadingLogout , setLoading] = useState(null);
    const {setAuthUser} = UseAuthContext();
    const logout = async (type) =>{
        try {
            setLoading(true);
            const query = new URLSearchParams({type : type});
            const res = await axios.post("/api/logout?"+query,{});
            if(res.data.error)
                throw new Error(res.data.error);
            localStorage.removeItem("auth-user");
            setAuthUser(null);
            if(type==="Doctor")
                dispatch(setDocNull());
            else
                dispatch(setClientNull());
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingLogout , logout};
}



export default LogoutHook;