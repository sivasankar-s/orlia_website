import React from 'react'
import one from '../assets/1st-prize.png'
import two from '../assets/2nd-place.png'
import three from '../assets/3rd-place.png'
import prize from '../assets/prize.png'

const Prize = ({pref}) => {
  return (
    <div ref={pref} className='mt-24 lg:mt-44 pb-36'>
        <h1 className='font-anta text-2xl lg:text-6xl  text-center mb-12'>Cash Prizes available</h1>

        <div className='flex flex-wrap justify-center items-center text-center '>

        <div className='flex flex-col justify-center items-center text-center'>
          <img src={prize} className='w-56 h-56'/>
          {/* <div className=''> */}
          {/* <h2 className='font-orbitron text-xl lg:text-3xl mt-3'>Cash Prizes Available</h2> */}
          {/* <h2 className='font-orbitron text-xl lg:text-3xl'>Rs. 15,000</h2> */}
          {/* </div> */}
        </div>

       

        </div>

    </div>
  )
}

export default Prize