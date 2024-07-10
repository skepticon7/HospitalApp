import React, { useState , useEffect, act} from 'react'
import pharmacy from "../../assets/pharmacy.png"
import {Link} from "react-router-dom";
import { UseAuthContext } from '../../Context/AuthContext';
import down from "../../assets/down.png";
import bell from "../../assets/bell.png";
import docIcon from "../../assets/doctor-icon.png";
import patientIcon from "../../assets/patient-icon.png";
import logoutIcon from "../../assets/logout.png";
import user from "../../assets/user.png"
import LogoutHook from "../../Hooks/LogoutHook.js";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import Doc from "../doctor/doc.jsx";
import {AcceptAppHook , RejectAppHook} from "../../Hooks/Doctor/AppointmentAcceptanceRejectionHook.js";
import {setView} from "../../Redux/Actions/ReduxActions.js";

function navbar({isInside = true}) {
  // my context
  const {AuthUser} = UseAuthContext();


  //my redux state

    const DocAppointments = useSelector(state=>state.DocReducer.doctorAppointments);
    const DocInfo = useSelector(state=>state.DocReducer.doctorInfo);
    const DocPayments = useSelector(state=>state.DocReducer.doctorPayments);

    const PatientAppointments = useSelector(state=>state.ClientReducer.patientAppointments);
    const PatientPayments = useSelector(state=>state.ClientReducer.patientPayments);
  console.log(PatientAppointments);
    const PatientInfo = useSelector(state=>state.ClientReducer.patientInfo);


  const dispatch = useDispatch();


  //const
  const [firstname , lastname] = AuthUser ?  AuthUser.username.split(" ") : "";
  const location = useLocation();
  const navigate = useNavigate();

  //my states
  const [activeSection, setActiveSection] = useState(null);
  const [clickedSection, setClickedSection] = useState(null);
  const [isToggled , setIsToggled] = useState(false);
  const [isNotifToggled , setNotifToggled] = useState(false);
  const [notifSize , setNotifSize] = useState(null);


  // useEffect(()=>{
  //   let size = 0;
  //   for (let i = 0; i < DocAppointments.length ; i++) {
  //     if(DocAppointments[i].Status === "Requested")
  //         size++;
  //   }
  //   setNotifSize(size);
  // })

  //observation hook
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.5, 
    };
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !clickedSection) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  },[clickedSection]);

  //my handles
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setClickedSection(sectionId);
    setTimeout(() => {
      setClickedSection(null);
    }, 1500); 
  };

  const HandleToggle = ()=>{
    setIsToggled(!isToggled);
    setNotifToggled(false);
  }

  const HandleLogout = async ()=>{
    await logout(AuthUser.type);
  }

  const HandleNotif = ()=>{
    setNotifToggled(!isNotifToggled);
    setIsToggled(false);
  }



  const HandeMoving = ()=>{
    if(location.pathname==="/") {}
        navigate("/infoDoctor");
    dispatch(setView("app"))
  }

  const HandleAccept = async (id , patientId , price)=>{
    await AcceptApp(id , patientId , price);
  }

  const HandleReject = async (id)=>{
    await RejectApp(id);
  }

  //my hooks
  const {loadingLogout , logout} = LogoutHook();
  const {loadingAcceptApp , AcceptApp} = AcceptAppHook();
  const {loadingRejectApp , RejectApp} = RejectAppHook();




  return (
    <div className='sticky top-0 z-[50] color-main'>
      <div className=' flex justify-between items-center py-7'>
        <div className='flex gap-2 justify-between items-center'>
          <img className='w-8 h-8' src={pharmacy} alt="logo"/>
          <h1 className='poppins-extrabold text-3xl'><Link to="/">Curify</Link></h1>
        </div>
        {
            isInside && (
                <div className='flex gap-8'>


                  <a className={`poppins-semibold opacity-70 text-md cursor-pointer transition-colors duration-500 ease-in-out ${activeSection === "service" ? "text-bookbutton" : ""}`}
                     onClick={() => handleScroll("service")}>Service</a>
                  <a className={`poppins-semibold opacity-70 text-md cursor-pointer transition-colors duration-500 ease-in-out ${activeSection === "staff" ? "text-bookbutton" : ""}`}
                     onClick={() => handleScroll("staff")}>Staff</a>
                  <a className={`poppins-semibold opacity-70 text-md cursor-pointer transition-colors duration-500 ease-in-out ${activeSection === "footer" ? "text-bookbutton" : ""}`}
                     onClick={() => handleScroll("footer")}>Contact</a>

                </div>

            )
        }




        <div
            className={`flex gap-1 items-center justify-center `}
            >
          {AuthUser ?
              <div className={`flex gap-1 items-center justify-center cursor-pointer px-1 py-2 rounded-lg transition-colors duration-300 ease-in-out ${AuthUser ? "hover:bg-white rounded-full" : null} ${isToggled && AuthUser ? "bg-white" : null}`}>
                <div className={`flex gap-1  `} onClick={HandleToggle}>
                  <img src={down} className="w-5"></img>
                  <p className="poppins-semibold">{firstname}</p>
                </div>
                <button className=' poppins-semibold'><img className='w-7 '
                                                                      src={AuthUser && AuthUser.type === "Doctor" ? docIcon : patientIcon}
                                                                      alt="" /></button>
              </div>
              : null}
          {!AuthUser && (
              <button className='color-blue px-5 py-2 rounded-md poppins-semibold text-white secondary-button'><Link
                  to="/login">Login</Link></button>)}


          {AuthUser ?
              <button className={`hover:bg-white rounded-lg px-1 py-2 transition-colors duration-300 ease-in-out relative`} onClick={HandleNotif}>
                <img className="w-7" src={bell}></img>
                <p className="bg-red-500 text-white poppins-semibold px-2 py-0 rounded-2xl text-sm absolute top-[0px] right-[-3px]">{notifSize !== 0 ? notifSize : null}</p>
              </button>
              : null}
        </div>

      </div>
      {isToggled && AuthUser &&
          (

              <div
                  className="flex dropdown flex-col gap-1 bg-white items-center justify-center rounded-lg w-52 p-2 duration-500 ease-in-out absolute right-0 top-[85%]">
                <Link className="flex justify-start gap-3 w-full items-center py-2 px-3 main-button rounded-md"
                      to={AuthUser.type === "Doctor" ? "/infoDoctor" : "/infoPatient"}>
                  <img src={AuthUser && AuthUser.type === "Doctor" ? docIcon : patientIcon} className="w-6"></img>
                  <p className="poppins-semibold text-lg">Your Profile</p>

                </Link>

                <button className="flex justify-start gap-3 items-center w-full main-button rounded-md py-2 px-3"
                        onClick={HandleLogout}>
                  <img src={logoutIcon} className="w-6"></img>
                  <p className="poppins-semibold text-lg">Logout</p>
                </button>
              </div>
          )
      }

      {isNotifToggled && AuthUser.type==="Doctor" && (
          <div className="flex dropdown flex-col gap-2 bg-white items-start justify-start rounded-lg max-w-80 p-3 duration-500 ease-in-out absolute right-0 top-[85%] cursor-pointer" >
            {notifSize > 0 ?
                <>
                  <p className="poppins-semibold">Appointment requests :</p>
                  <div className="flex flex-col gap-5">


                    {DocAppointments.map(app => (
                        app.Status === "Requested" ?
                            <div className="flex flex-col gap-3 max-h-full overflow-auto">
                              <div className="flex gap-4 items-center justify-start" onClick={HandeMoving}>
                                <img className="w-10 rounded-full" src={app.Patient.photo}></img>
                                <p className="text-sm poppins-medium opacity-70"><span
                                    className="poppins-semibold">Mr {app.Patient.username}</span> has requested an
                                  appointment
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <button className="secondary-button w-2/3 py-2 px-3 rounded-md poppins-bold"
                                        onClick={() => HandleAccept(app._id , app.Patient._id , DocInfo.price)}>Confirm
                                </button>
                                <button className="secondary-button w-2/3 py-2 px-3 rounded-md poppins-bold"
                                        onClick={() => HandleReject(app._id)}>Reject
                                </button>
                              </div>
                            </div>
                            : null


                    ))}
                  </div>


                </>


                : <div>
                  <p className="poppins-medium text-lg">No notifications</p>
                </div>}

          </div>

      )}

      {isNotifToggled  && AuthUser.type==="Patient" && (
          <div
              className="flex dropdown flex-col gap-2 bg-white items-start justify-start rounded-lg max-w-80 p-3 duration-500 ease-in-out absolute right-0 top-[85%] cursor-pointer">
            {PatientAppointments && PatientAppointments.length > 0 ?
                <>
                  <p className="poppins-semibold">Appointment responses :</p>
                  <div className="flex flex-col gap-5">


                    {PatientAppointments.map(app => (
                        app.Status === "Confirmed" ?
                            <div className="flex flex-col gap-3 max-h-full overflow-auto">
                              <div className="flex gap-4 items-center justify-start" onClick={HandeMoving}>
                                <img className="w-7 rounded-full" src={app.Doctor.photo}></img>
                                <p className="text-sm poppins-medium opacity-70"><span
                                    className="poppins-semibold">Dr {app.Doctor.username}</span> has accepted your
                                  appointment request
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <button className="secondary-button w-full py-2 px-3 rounded-md poppins-bold"
                                       >Pay
                                </button>

                              </div>
                            </div>
                            : null


                    ))}
                  </div>


                </>


                : <div>
                  <p className="poppins-medium text-lg">No notifications</p>
                </div>}

          </div>


      )}

    </div>

  )
}

export default navbar