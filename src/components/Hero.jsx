import React from 'react'
import mkcelogo from '../assets/mkcelogo.jpg'
import bg4 from '../assets/bg4.jpg'
import bg7 from '../assets/bg7.png'
import bg1 from '../assets/bg1.jpg'
import bgv3 from '../assets/bgv3.mp4'
import bgv4 from '../assets/bgv4.mp4'

const Hero = ({pref}) => {
  return (
    <div ref={pref} className=' flex relative mt-7 lg:mt-36 gap-y-10 pb-3 lg:pb-40  lg:gap-y-0 flex-col h-[65vh] lg:h-[100vh] items-center justify-center overflow-hidden
    
    '>


      {/* <p className='absolute top-3 left-1 lg:left-4 text-xs lg:text-lg p-1.5 font-semibold bg-yellow-500 rounded-lg lg:p-3'>No Fee for Idea Submission</p> */}
        {/* <img src={mkcelogo} className='absolute top-0 left-1 lg:left-4 lg:w-72 lg:h-24' /> */}

        {/* <img src={bg7} className='w-full h-full' /> */}

        {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover "
      >
        <source src={bgv4} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        
        
        <div className='absolute  top-32 lg:top-20  text-center   '>
        <h1 className=' text-4xl lg:text-9xl lg:mt-12  text-white header-gradient bg-black   font-protest'>ORLIA' 24</h1>
        <h1 className=' text-xl mt-5 lg:text-5xl  lg:mt-10  text-white  font-anta'>Intra College Cultural Fest</h1>
        </div>

      

        <div className='absolute text-center top-2/3 lg:top-1/2 '>
        <h1 className=' text-xl lg:text-4xl mt-0 lg:mt-32 text-white font-anta'>March 27-28, 2024</h1> 
        <h3 className=' text-2xl mx-4 lg:mx-0 flex  text-center text-white  lg:text-3xl mt-5 lg:mt-6 font-anta '>M. Kumarasamy College of Engineering, Karur</h3>
        </div>

        
    </div>
  )
}

export default Hero