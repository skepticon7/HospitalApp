import React from 'react'
import locations from "../../assets/locations.png";
import appointment from "../../assets/appointment.png";
import finddoc from "../../assets/finddoc.png";
import {Link } from "react-router-dom"
function section1() {
  return (
    <section className='flex pt-32 gap-44'>
        <div className='flex flex-col gap-7 justify-center items-center '>
            <img className='w-40' src={finddoc} alt="find a doctor" />
            <h1 className='poppins-bold text-xl text-bookbutton'>Find a doctor</h1>
            <p className='poppins-medium opacity-70 text-center'>Connect with a wide network of highly qualified doctors across various specialties.</p>
            <div>
                <div className="w-full cursor-pointer mt-5 ">
                                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow color-bookbutton transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out color-bookbutton group-hover:h-full"></span>
                                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-bookbutton">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-gray-900">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"><Link to="/find">Discover</Link></span>
                                </div>
                 </div>
             </div> 
        </div>
        <div className='flex flex-col gap-7 justify-center r items-center '>
            <img className='w-40' src={locations} alt="find a doctor" />
            <h1 className='poppins-bold text-xl text-bookbutton'>Our locations</h1>
            <p className='poppins-medium opacity-70 text-center'>Discover Curify clinics and partner hospitals near you. access to quality healthcare has never been easier.</p>
            <div>
                <div className="w-full cursor-pointer mt-5 ">
                                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow color-bookbutton transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out color-bookbutton group-hover:h-full"></span>
                                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-bookbutton">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-gray-900">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"><Link to="/locations">Discover</Link></span>
                                </div>
                                </div>
             </div> 

        </div>
        <div className='flex flex-col gap-7 justify-center relative items-center '>
            <img className='w-40' src={appointment} alt="find a doctor" />
            <h1 className='poppins-bold text-xl text-bookbutton'>Make an appointment</h1>
            <p className='poppins-medium opacity-70 text-center'>Schedule your appointment in just a few clicks. Choose your preferred doctor</p>
            <div>
                <div className="w-full cursor-pointer mt-5 ">
                                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow color-bookbutton transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out color-bookbutton group-hover:h-full"></span>
                                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-bookbutton">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-gray-900">
                                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                  </span>
                                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"><Link to="/find"> Discover</Link></span>
                                </div>
                                </div>
             </div>  
        </div>
        
    </section>
  )
}

export default section1