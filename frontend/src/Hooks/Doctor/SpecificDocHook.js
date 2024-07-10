import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const SpecificDocHook = ()=>{
    useEffect(()=>{
        const getDoc = async (DocName)=>{
            try {
                setLoading(true);
                const query = new URLSearchParams({type : "Patient"})
                const docData = await axios.get("api/GetSpecificDoctor?"+query);
                if(docData.data.error)
                    throw new Error(docData.data.error);
                console.log(docData.data);
            } catch (error) {
                console.log("error fetching specific doc data : " , error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getDoc(DocName);
    },[]);


}


export default SpecificDocHook;