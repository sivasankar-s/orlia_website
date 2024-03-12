import React from 'react'
import dates from '../assets/dates4.svg';

const Dates = () => {
  return (
    <div className='mt-12 lg:mt-44 px-16 '>

    <h1 className="font-orbitron text-2xl lg:text-6xl ani-text after:content-['―――'] after:block text-center mb-12">Important Dates</h1>

    <div className='flex justify-center'>
      <img src={dates} className=' lg:w-1/3'/>
    </div>
        
    </div>
  )
}

export default Dates