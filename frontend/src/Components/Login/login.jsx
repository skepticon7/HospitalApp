import React, { useState } from 'react';
import doc from "../../assets/doc3.png";
import docicon from "../../assets/doctor.png";
import patient from "../../assets/patient.png";
import user from "../../assets/user.png";
import lock from "../../assets/padlock.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import email from "../../assets/email.png"
import SignupHook from '../../Hooks/SignupHook';
import LoginHook  from '../../Hooks/LoginHook';
function Login() {
  //states
  const [isLogin, setIsLogin] = useState(true);
  const [SelectedGender , setSelectedGender] = useState("")
  const [isDoc , setIsDoc] = useState("");
  const [FormSignup , setFormSignup] = useState({
    username : "",
    email : "",
    password : "",
    gender : "",
    type : "",
  });

  const [FormLogin , setFormLogin] = useState({
    username : "",
    password:"",
    type : ""
  })

  //handles


  const HandleIsDoc = (type)=>{
    setIsDoc(type);
    if(isLogin)
      setFormLogin({...FormLogin , type : type});
    else  
      setFormSignup ({...FormSignup , type : type});
  }

  const HandleGender = (gender)=>{
    setSelectedGender(gender)
    setFormSignup({...FormSignup , gender : gender});
  }

  const toggleForm = () => {
    setFormLogin({
      username : "",
      password : "",
      type : ""
    });
    setFormSignup({
      username : "",
      email : "",
      password : "",
      gender : "",
      type : ""
    });
    setIsLogin(!isLogin);
    setSelectedGender("");
    setIsDoc("");
  };

  const HandleForm = async (isLogin)=>{
    if(isLogin === "Login")
      await login(FormLogin);
    else if(isLogin === "Signup")
        await signup(FormSignup);

  }

  // hooks
  const {loadingLogin , login} = LoginHook();
  const {loadingSignup , signup} = SignupHook();

  return (
    <div className='flex justify-center items-center color-main h-screen'>
      <div className='flex gap-0 w-5/12 relative'>
      
        
        <div className={`bg-white rounded-l-xl w-3/6 flex flex-col py-3 px-5 ${isLogin ? 'auth-show ' : 'auth-hide' } justify-between  auth-form`}>
          <div className='flex flex-col gap-10'>
            <p className='text-2xl poppins-bold text-center'>Login</p>
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-1 w-full input-container relative'>
                    <label className='text-sm poppins-semibold input-label' htmlFor="">Username :</label>
                    <input className='rounded-md border-black border-[3px] border-solid py-3 px-3 text-xs' type="text"  onChange={e=>setFormLogin({...FormLogin , username : e.target.value})}/>
                    <img className='w-5 absolute right-4 top-[12px]' src={user} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 input-container relative'>
                    <label className='text-sm poppins-semibold input-label' htmlFor="">Password :</label>
                    <input className='rounded-md border-black border-[3px] border-solid py-3 px-3 text-xs' type="password"  onChange={e=>setFormLogin({...FormLogin , password : e.target.value})}/>
                    <img className='w-5 absolute right-4 top-[12px]' src={lock} alt="" />
                  </div>
                  <div className='flex justify-between'>
                  
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${isDoc === "Doctor" ? "button-selected" : null}`} onClick={ ()=>HandleIsDoc("Doctor")} ><img className='w-6' src={docicon} alt="" /></button>
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${isDoc === "Patient" ? "button-selected" : null}`} onClick={()=>HandleIsDoc("Patient") } ><img className='w-6' src={patient} alt="" /></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <button className='secondary-button w-full rounded-lg poppins-semibold py-2  text-lg' onClick={()=>HandleForm("Login")}>{loadingLogin ? <span className="loading loading-spinner loading-sm color-bookbutton absolute right-[50%] top-[5%]"></span> : "Login"}</button>
            <p className='poppins-medium text-sm' onClick={toggleForm}>Don't have an account ? <span className='poppins-bold cursor-pointer text-bookbutton' onClick={toggleForm}>Signup</span>  </p>
          </div>
        </div>

        


        <div className={`bg-white rounded-l-xl w-3/6 flex flex-col py-3 px-5 ${!isLogin ? 'auth-show' : 'auth-hide'} absolute w-1/2 justify-between  auth-form h-full`}>
          <div className='flex flex-col gap-5 '>
            <p className='text-2xl poppins-bold text-center'>Signup</p>
            <form onSubmit={(e)=>(e.preventDefault())}>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-1 w-full input-container'>
                    <label className='text-sm poppins-semibold input-label'>Username :</label>
                    <input className='auth-input rounded-md border-black border-[3px] border-solid py-3 px-3 text-xs' type="text" onChange={e=>setFormSignup({...FormSignup , username : e.target.value})}/>
                    <img className='w-5 absolute right-4 top-[12px]' src={user} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 input-container relative'>
                    <label className='text-sm poppins-semibold input-label' >Email :</label>
                    <input className='auth-input rounded-md border-black border-[3px] border-solid py-3 px-3 text-xs' type="text" onChange={e=>setFormSignup({...FormSignup , email : e.target.value})}/>
                    <img className='w-5 absolute right-4 top-[12px]' src={email} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 input-container relative'>
                    <label className='text-sm poppins-semibold input-label'>Password:</label>
                    <input className='auth-input rounded-md border-black border-[3px] border-solid py-3 px-3 text-xs' type="password" onChange={e=>setFormSignup({...FormSignup , password : e.target.value})}/>
                    <img className='w-5 absolute right-4 top-[12px]' src={lock} alt="" />
                  </div>
                  <div className='flex justify-between'>
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${isDoc === "Doctor" ? "button-selected" : null}`}  onClick={ ()=>HandleIsDoc("Doctor") }><img className='w-6' src={docicon} alt="" /></button>
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${isDoc === "Patient" ? "button-selected" : null}`}  onClick={ ()=>HandleIsDoc("Patient")}><img className='w-6' src={patient} alt="" /></button>
                  </div>
                  <div className='flex justify-between'>
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${SelectedGender === "Male" ? "button-selected" : null}`}  onClick={ ()=>HandleGender("Male")}><img className='w-6' src={male} alt="" /></button>
                    <button className={`auth-button border-solid border-black border-[3px] px-10 py-2 rounded-md ${SelectedGender === "Female" ? "button-selected" : null}`}  onClick={ ()=>HandleGender("Female")}><img className='w-6' src={female} alt="" /></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='flex flex-col gap-3 items-center '>
            <button className='secondary-button w-full rounded-lg poppins-semibold py-2 px-5 ' onClick={()=>HandleForm("Signup")}>{loadingSignup ? <span className="loading loading-spinner loading-sm color-bookbutton absolute right-[50%] top-[5%]"></span> : "Signup"}</button>
            <p className='poppins-medium text-sm' onClick={toggleForm}>Already have an account ? <span className='poppins-bold cursor-pointer text-bookbutton' onClick={toggleForm}>Login</span>  </p>
          </div>
        </div>

        {/* Doctor Image */}
        
        <div className={`color-bookbutton rounded-r-xl w-3/6 flex items-center justify-center  `}>
          <img className='w-full' src={doc} alt="doclogin" />
        </div>
      </div>
    </div>
  )
}

export default Login;
