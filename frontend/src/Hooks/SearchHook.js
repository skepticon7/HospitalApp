import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {setSearchedDocs} from "../Redux/Actions/ReduxActions.js";

const SearchDocHook = ()=>{
    const [loadingSearchDoc, setLoading] = useState(null);
    const dispatch = useDispatch();
    const searchDoc = async (inputs , type)=>{
        try {
            setLoading(true);
            const query = new URLSearchParams({type : type})
            const Res = await axios.post("/api/searchDoc?"+query , {
                keyword : inputs
            });
            if(Res.data.error)
                throw new Error(Res.data.error);
            dispatch(setSearchedDocs(Res.data));
        }catch (error) {
            console.log("error searching doctor : " + error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingSearchDoc, searchDoc}
}

export default SearchDocHook;