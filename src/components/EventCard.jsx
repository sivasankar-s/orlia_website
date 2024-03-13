import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const EventCard = ({name, desc, imgUrl}) => {
  return (
    <div className=' h-48 w-full lg:h-72 lg:w-96 overflow-hidden shadow-lg pb-7 hover:scale-105 rounded-2xl text-black bg-slate-500 transition-all ease-in-out  cursor-pointer'>
      <img src={imgUrl} className='object-cover w-full h-32 lg:h-52 rounded-lg' />

      {/* <div className='flex items-center'> */}
        <div className='flex items-center'>
        <h1 className='text-lg font-bold mt-5 pl-4 '>{name}</h1>
        <div className='flex items-center max-w-full justify-end ml-6 mt-5'>
          <FaArrowRight />
        </div>
        </div>
      {/* </div> */}
      {/* <p className='text-sm mt-2 pl-4'>{desc}</p> */}
    </div>
  )
}

export default EventCard
