import React from 'react'
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/pharmacy.png"
function footer() {
  return (
    <section id='footer' className='py-20 flex justify-between'>
        <div className='flex flex-col justify-between gap-5'>
            <div className='flex gap-2  items-center'>
                <img className='w-8' src={logo} alt="" />
                <p className='poppins-black text-2xl'>Curify</p>
            </div> 
            <p className='poppins-semibold'>Copyright | all rights reserved</p>
            <div className='flex gap-5'>
                <img className='w-10' src={facebook} alt="" />
                <img className='w-10' src={instagram} alt="" />
                <img className='w-10' src={linkedin} alt="" />
                <img className='w-10' src={twitter} alt="" />
            </div>
        </div>
        <div className='flex flex-col justify-between gap-5'>
             <p className='poppins-semibold text-lg'>Quick links</p>
             <div className='flex flex-col justify-between gap-2'>
                <a className="hover:underline" href="#">Home</a>
                <a className="hover:underline" href="#">About us</a>
                <a className="hover:underline" href="#">Contacts</a>
                <a className="hover:underline" href="#">Services</a>   
             </div>
        </div>
        <div className='flex flex-col justify-between gap-5'>
             <p className='poppins-semibold text-lg'>I want to : </p>
             <div className='flex flex-col justify-between gap-2'>
                <a className="hover:underline" href="#">Find a doctor</a>
                <a className="hover:underline" href="#">Book an appointment</a>
                <a className="hover:underline" href="#">Find location</a>
                <a className="hover:underline" href="#">Get a council</a>   
             </div>
        </div>
        <div className='flex flex-col  gap-5'>
             <p className='poppins-semibold text-lg'>Support</p>
             <div className='flex flex-col justify-between gap-2'>
                <a className="hover:underline" href="#">Donate</a>
                <a className="hover:underline" href="#">Contact us</a>

             </div>
        </div>

    </section>
  )
}

export default footer