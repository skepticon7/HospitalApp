import React from 'react'

function section2() {
  return (
    <section id='service' className='pt-44 flex flex-col items-center justify-center gap-16'>
        <h1 className='poppins-bold text-4xl'>Our medical services</h1>
        <div className='grid grid-cols-3 gap-x-16 gap-y-10'>
            
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl'>General Medecine</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Our General Medicine services offer comprehensive primary care, including preventive care, diagnosis.</p>
                        <p className='poppins-semibold absolute bottom-0 right-0 mt-5 color-lightblue px-5 py-3 rounded-md'>1</p>
                    </div>
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl'>Pediatrics</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Dedicated to children's health, our Pediatrics department provides routine check-ups, vaccinations, and treatment for common childhood illnesses</p>
                        <p className='poppins-semibold self-end mt-5 color-mediumblue px-5 py-3 rounded-md'>2</p>
                    </div>
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl max-w-70'>Cardiology</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Our Cardiology services diagnose and treat heart conditions, utilizing advanced technology to manage everything.</p>
                        <p className='poppins-semibold absolute bottom-0 right-0 mt-5 color-lightgreen px-5 py-3 rounded-md'>3</p>
                    </div>
           
     
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl '>Orthopedics</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Specializing in musculoskeletal conditions, our Orthopedics department treats sports to restore mobility and improve quality of life.</p>
                        <p className='poppins-semibold absolute bottom-0 right-0 mt-5 color-lightgreen px-5 py-3 rounded-md'>4</p>
                    </div>
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl'>Dermatology</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Our Dermatology services address a wide range of skin conditions, offering both medical and cosmetic treatments to help you achieve healthy, beautiful skin.</p>
                        <p className='poppins-semibold self-end mt-5 color-lightblue blue px-5 py-3 rounded-md'>5</p>
                    </div>
                    <div className='flex flex-col gap-5 relative'>
                        <h2 className='poppins-medium text-3xl'>Gynecology</h2>
                        <p className='poppins-regular opacity-70 text-sm'>Providing comprehensive care for women’s health, our Obstetrics and Gynecology department offers prenatal cares for reproductive health issues.</p>
                        <p className='poppins-semibold absolute right-0 bottom-0 mt-5 color-mediumblue blue px-5 py-3 rounded-md'>6</p>
                    </div>
         
        </div>
    </section>
  )
}

export default section2