import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import {setClientInfo} from "../../Redux/Actions/ReduxActions.js";
import {useDispatch} from "react-redux"
const PatientInfoHook = () => {
    const [loadingPatientInfo, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchPatientInfo = async (type) => {
            console.log(type);
            const query = new URLSearchParams({ type: type });
            try {
                setLoading(true);

                   const user = await  axios.get("/api/GetUser?" + query);

                   const app = await  axios.get("/api/GetAppointment?" + query);

                   const pay = await  axios.get("/api/GetPayment?" + query);


                    
                const data = {
                PatientInfo :user.data,
                PatientAppointments : app.data,
                PatientPayments : pay.data
                }
                console.log(data);
                    dispatch(setClientInfo(data));

            } catch (error) {
                console.error("Error fetching data:", error.message);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPatientInfo("Patient");
    }, []);
    return { loadingPatientInfo };
}

export default PatientInfoHook;
