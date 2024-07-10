import React from 'react'
import {Link} from "react-router-dom";

function HeroText() {
  return (
    <div className="flex flex-col  w-1/2 justify-between">
        <div className='flex flex-col gap-5'>
            <h1 className='poppins-semibold text-6xl leading-tight'>Welcome to Curify Your Health, Our Priority</h1>
            <p className='poppins-medium opacity-70 text-md'>At Curify, Connect with trusted healthcare professionals and get the care you deserve, when you need it the most. Book your appointment today!</p>
            <button className='color-blue py-3 px-7 secondary-button rounded-md text-white poppins-bold w-1/2 text-base'><Link to="/find">Book an appointment</Link> </button>
        </div>
        <div className='flex gap-7 justify-between'>
            <div>
                <h2 className='poppins-bold text-3xl'>15+</h2>
                <p className='poppins-medium opacity-70'>Years of experience</p>
            </div>
            <div >
                <h2 className='poppins-bold text-3xl'>24/7</h2>
                <p className='poppins-medium opacity-70' >Support</p>
            </div>
            <div >
                <h2 className='poppins-bold text-3xl'>100%</h2>
                <p className='poppins-medium opacity-70'>Satisfaction</p>
            </div>
        </div>
    </div>
  )
}

export default HeroText