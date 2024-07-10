import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import {setHighestDocs} from "../../Redux/Actions/ReduxActions.js";
import {useDispatch} from "react-redux"
const HighestDocsHook = () => {
    const [loadingHighestDocs, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchDocs = async () => {

            try {
                setLoading(true);
                const DocsData = await axios.get("/api/GetHighestRated");
                if(DocsData.data.error)
                    throw new Error(DocsData.data.error);
                dispatch(setHighestDocs(DocsData.data));
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Error fetching highest doctors data");
            } finally {
                setLoading(false);
            }
        }

        fetchDocs();
    }, []);
    return { loadingHighestDocs };
}
export default HighestDocsHook;
