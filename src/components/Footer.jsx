import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black w-auto lg:w-full -mt-36  py-20'>
        <div className='flex flex-col justify-center gap-y-2 '>
            {/* <p className='text-white text-center text-sm lg:text-md'>Made with ❤️ by <Link className='font-bold' target='_blank' to='https://www.linkedin.com/in/sivasankar-s31/'>Siva</Link></p> */}
            {/* <p className='text-white text-center text-sm lg:text-md'>Department of Information Technology, MKCE</p> */}
            <p className='text-white text-center text-sm lg:text-md'> Orlia © 2024</p>
        </div>

    </div>
  )
}

export default Footer