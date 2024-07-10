import React , {useState} from 'react'
import UpdatePasswordHook from '../../Hooks/Doctor/updatePasswordHook';
import { UseAuthContext } from '../../Context/AuthContext';
function password() {
    //my context
    const {AuthUser} = UseAuthContext()

    //my states
    const [updatePasswordForm , setUpdatePasswordForm] = useState({
      oldPassword : "",
      newPassword : "",
      confirmedPassword : ""
});


//my hooks
const {loadingPasswordUpdate , updatePassword} = UpdatePasswordHook();

//my handles
const HandleUpdatePassword = async ()=>{
      await updatePassword(updatePasswordForm , AuthUser.type);
}

  return (
    <div className='flex flex-col gap-6 w-full'>
        <p className='poppins-bold text-2xl'>Change my password</p>
        <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
                <div className='grid col-span-2'>
                    <div className='flex flex-col gap-2  '>
                        <label className='poppins-semibold'>Old Password<span className="text-red-600">*</span></label>
                        <input type="password" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' onChange={e=>setUpdatePasswordForm({... updatePasswordForm , oldPassword : e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2  '>
                        <label className='poppins-semibold'>New Password<span className="text-red-600">*</span></label>
                        <input type="password" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' onChange={e=>setUpdatePasswordForm({... updatePasswordForm , newPassword : e.target.value})}/>
                </div>
                <div className='flex flex-col gap-2  '>
                        <label className='poppins-semibold'>Confirm New Password<span className="text-red-600">*</span></label>
                        <input type="password" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' onChange={e=>setUpdatePasswordForm({... updatePasswordForm , confirmedPassword : e.target.value})}/>
                </div>
        </div>
        <button className='secondary-button py-3 self-center px-3 rounded-lg poppins-semibold mt-5' onClick={HandleUpdatePassword}>{loadingPasswordUpdate ? "Loading..." : "Update Password" }</button>
        
    </div>
  )
}

export default password