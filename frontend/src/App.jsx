import { useState , useEffect  } from 'react';
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import Error from './Components/Error/error';
import './App.css'
import Home from './Components/Home/home'
import Login from './Components/Login/login';
import Locations from './Components/locations/locations';
import ScrollToTop from './Components/scroller/scroller';
import Findoc from './Components/findDoc/findoc';
import Doc from './Components/doctor/doc';
import DocBook from "./Components/doctor/docBook.jsx";
import InfoPatient from './Components/Patient settings/info';
import InfoDoctor from "./Components/doctor settings/info";
import {Toaster} from "react-hot-toast";
import { UseAuthContext } from './Context/AuthContext';
import {useDispatch} from "react-redux";
import {setSearchedDocs, setSearchedNull} from "./Redux/Actions/ReduxActions.js";
function App() {
  const {AuthUser} = UseAuthContext();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(()=>{
        return ()=>{
            if(location.pathname!=="/find")
                dispatch(setSearchedNull());
        }

    },[location,dispatch ])

    useEffect(()=>{

        const verify = async ()=> {

                const query = new URLSearchParams({UserId : AuthUser.id});
                const URL = "/api/verify?"+query;
                const res = await fetch(URL);
                const data = await res.json();
                if(data.error) {
                    localStorage.removeItem("auth-user");

                }



        }
        verify();
    },[]);
  return (
    <>
    
    
    <ScrollToTop/>
    <Toaster/>
      <Routes>      
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/login' element={AuthUser ?  <Navigate to='/'/> : <Login/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/find' element={<Findoc/>}/>
          <Route path="/doctor/:doctorName" element={<Doc/>} />
          <Route path='/infoPatient' element={(AuthUser && AuthUser.type !== "Patient") || !AuthUser  ? <Navigate to='/'/> : <InfoPatient/>}/>
          <Route path='/infoDoctor' element={(AuthUser && AuthUser.type !== "Doctor") || !AuthUser  ? <Navigate to='/'/> :<InfoDoctor/>}/>
      </Routes>
      
     
    </>
  )
}

export default App
