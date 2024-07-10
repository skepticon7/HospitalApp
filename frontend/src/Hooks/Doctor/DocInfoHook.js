import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import {setDocInfo} from "../../Redux/Actions/ReduxActions.js";
import {useDispatch} from "react-redux"
const DocInfoHook = () => {
    const [loadingDocInfo, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchDocInfo = async (type) => {
            const query = new URLSearchParams({ type: type });
            try {
                setLoading(true);

                const requests = [
                    await axios.get("/api/GetUser?"+query),
                    await axios.get("/api/GetEducation?"+query),
                    await axios.get("/api/GetExperience?"+query),
                    await axios.get("/api/GetTime?"+query),
                    await axios.get("api/GetPayment?"+query),
                    await axios.get("api/GetAppointment?"+query)
                ];

                const [
                    DoctorInfoResponse,
                    DoctorEducationResponse,
                    DoctorExperienceResponse,
                    DoctorTimeResponse,
                    DoctorPaymentsResponse,
                    DoctorAppointmentsResponse
                ] = await axios.all(requests)

                
                const data = {
                DoctorInfo :DoctorInfoResponse.data,
                DoctorAppointments : DoctorAppointmentsResponse.data,
                DoctorExperience : DoctorExperienceResponse.data,
                DoctorEducation :  DoctorEducationResponse.data,
                DoctorTime :  DoctorTimeResponse.data , 
                DoctorPayments : DoctorPaymentsResponse.data
                }
                console.log(data);
                    dispatch(setDocInfo(data));

            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Error fetching doctor data");
            } finally {
                setLoading(false);
            }
        }

        fetchDocInfo("Doctor");
    }, []);
    return { loadingDocInfo };
}

export default DocInfoHook;
