import React from 'react'

function deleteDoc() {
  return (
        <div className='flex flex-col gap-5 w-full'>
        <p className='poppins-bold text-2xl'>Delete My Account</p>
    <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
        
            <div className='flex flex-col gap-2  '>
                <label className='poppins-semibold'>Email<span className="text-red-600">*</span></label>
                <input type="password" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' />
            </div>
        
        <div className='flex flex-col gap-2  '>
                <label className='poppins-semibold'>Password<span className="text-red-600">*</span></label>
                <input type="password" className='rounded-md border-black border-[3px] border-solid py-3 px-3 bg-transparent' />
        </div>

    </div>
    <button className='secondary-button py-3  px-3 rounded-lg poppins-semibold mt-5 self-center'>Delete Account</button>

    </div>
  )
}

export default deleteDoc