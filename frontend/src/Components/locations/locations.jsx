import React from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import loc1 from "../../assets/location1.png";
import loc from "../../assets/location.png";
import phone from "../../assets/phone-call.png";

function locations() {
  return (
    
    <div  className='color-main'>
          <div className='mx-36'>
            
            <Navbar/>
            <div className='py-10 flex flex-col gap-10'>
                <p className='text-3xl poppins-bold'>Our locations</p>
                <div className='grid grid-cols-4 gap-x-7 gap-y-5 '>
                    <div className='border-bookbutton p-4 flex flex-col justifty-between rounded-lg '>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify ROUDANI</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>380 Boulevard Brahim Roudani, quartier Maarif</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify MAARIF</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>217, BD BIR ANAZARANE, quartier Maarif</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify ORANGERS</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>Lotissement Alkhawarizmi, quartier laymoune</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify CENTRE 1</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>105 Rue Al Bakri à côté du rond point chimie color</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify CENTRE 2</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>135 Rue Al Bakri</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify AGDAL 1</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>imm 52, Av Omar ben khattab, AGDAL</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify AGDAL 2</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>Angle Avenue Oqba et rue assouheili, Agdal</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                    <div className='border-bookbutton p-4 flex flex-col gap-5 rounded-lg'>
                        <div className='flex flex-col gap-5 h-full'>
                            <p className='text-2xl poppins-semibold'>Curify TANGER</p>
                            <div className='flex gap-2' >
                                <img className='w-7' src={phone} alt="" />
                                <p className='poppins-medium opacity-70'>+212 6-121-41574</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-8 h-8' src={loc} alt="" />
                                <p className='poppins-medium opacity-70'>Angle Rue Omar Ibn Abdelaziz & Rue Sejelmassa</p>
                            </div>
                        </div>
                        <button className='  secondary-button w-4/5 py-3 px-5  rounded-lg flex gap-2 items-center justify-start'>
                            <img className='w-6' src={loc1} alt="" />
                            <p className='poppins-semibold text-md'>Show in map</p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
          </div>
    </div>
  )
}

export default locations