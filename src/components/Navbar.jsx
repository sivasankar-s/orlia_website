import React from 'react'
import { Link } from 'react-router-dom'
import mkcelogo from '../assets/mkcebw.png'
import naac from '../assets/naac.png'
import wheel from '../assets/wheel.png'
import nirf from '../assets/nirf.png'

import kr from '../assets/kr.png'


const Navbar = () => {
  return (

    <div className=' header   text-sm gap-4 lg:text-lg sm:gap-10 font-medium font-anta p-1 '>
      {/* absolute top-0 right-0 left-0 */}
      <div className='flex gap-x-4 lg:gap-x-12'>
      <img src={mkcelogo} className=' lg:left-4 lg:w-56 lg:h-16 w-32 h-12' />
      {/* <div className='flex justify-center '> */}
      <img src={naac} className=' lg:w-16 lg:h-12 w-10 h-7' />
      <img src={wheel} className=' lg:w-12 lg:h-12 w-6 h-7' />
      <img src={nirf} className=' lg:w-32 lg:h-12 w-16 h-7' />
      {/* </div> */}
      </div>

      {/* <Link to='/' className="font-semibold navunderline">Home</Link> */}
      {/* <Link to='/contact' className=' font-semibold navunderline'>Contact</Link>
      <Link target='_blank' to='https://forms.gle/eEheENwiwWjZRJeu6' className=' font-semibold navunderline'>Register</Link> */}

      

      <nav className='flex justify-end  text-md gap-4 sm:text-lg  font-medium'>
      <img src={kr} className=' lg:w-36 lg:h-12 w-12 h-6' />
      </nav>
    </div>
  )
}

export default Navbar