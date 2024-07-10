import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PostReviewHook = ()=>{
    const [loadingPostReview, setLoading] = useState(null);
    const postReview = async (inputs)=>{
        try {
            setLoading(true);
            const query = new URLSearchParams({type : "Patient"})
            const Res = await axios.post("/api/PostReview?"+query , {
                ReviewInfo : inputs
            });
            if(Res.data.error)
                throw new Error(Res.data.error);
            toast.success(Res.data.msg);
        }catch (error) {
            console.log("error posting review : " + error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loadingPostReview, postReview}
}

export default PostReviewHook;