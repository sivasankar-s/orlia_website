import React from 'react'
import { Link } from 'react-router-dom'
import mkcelogo from '../assets/mkcebw.png'

import kr from '../assets/kr.png'


const Navbar = () => {
  return (

    <div className=' header   text-sm gap-4 lg:text-lg sm:gap-10 font-medium font-anta p-3'>
      {/* absolute top-0 right-0 left-0 */}
      <img src={mkcelogo} className=' lg:left-4 lg:w-72 lg:h-24 w-24 h-8' />
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