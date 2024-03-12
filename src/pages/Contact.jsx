import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { IoMdMail } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='h-screen w-auto sm:w-full bg-white flex flex-col '>

        <Navbar />
        <h1 className='mt-20 text-4xl lg:text-7xl font-anta text-center  after:block mb-20'>CONTACT</h1>

        <div className='bg-gray-500'>
        <div className='m-20 p-5 mx-6 lg:mx-16 bg-gray-950 '>
            
            <div className='flex flex-wrap gap-y-10 my-10 justify-center text-white '>
                <div className='flex flex-col  items-center lg:w-1/2 '>
                    <h3 className='text-2xl text-center font-bold mb-10'>Staff Coordinators</h3>

                    <div className='flex justify-center space-x-6 '>
                    <div className='flex  flex-col gap-y-5 text-center'>
                        <p className='text-lg font-bold'>Dr. A. Syed Musthafa </p>
                        <p className='text-lg font-bold'>Mr. A. Vijay</p>
                    </div>

                    <div className='flex flex-col gap-y-5'>
                        <Link className='text-lg font-semibold text-cyan-300' to='tel:9787886643'>+91 9787886643</Link>
                        <Link className='text-lg font-semibold text-cyan-300' to='tel:9942712798'>+91 9942712798</Link>
                    </div>
                    </div>
                    
                    
                </div>

                <div className='flex flex-col items-center lg:w-1/2'>
                    
                    <h3 className='text-2xl text-center font-bold mb-10'>Student Coordinators</h3>

                    <div className='flex justify-center space-x-6 '>
                        <div className='flex flex-col gap-y-5 '>
                            <p className='text-lg font-bold'>Nivesh G </p>
                            <p className='text-lg font-bold'>Bommanesh S </p>
                            <p className='text-lg font-bold'>Swathi G </p>
                            <p className='text-lg font-bold'>Kiruthika B  </p>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <Link className='text-lg font-semibold text-cyan-300' to='tel:9363354914'>+91 9363354914</Link>
                            <Link className='text-lg font-semibold text-cyan-300' to='tel:7010433740'>+91 7010433740</Link>
                            <Link className='text-lg font-semibold text-cyan-300' to='tel:7708076533'>+91 7708076533</Link>
                            <Link className='text-lg font-semibold text-cyan-300' to='tel:9791488767'>+91 9791488767</Link>
                        </div>
                    </div>

                </div>
             
            

            </div>

            <div className='flex items-center justify-center'>
                <div className='text-white items-center mt-10 mr-4 text-xl'>
                    <IoMdMail />
                </div>
                <h4 className='mt-10 text-lg font-semibold text-center text-white'> crackathon2.0@gmail.com</h4>
            </div>

            <div className='flex items-center justify-center'>
                <div className='text-white items-center mt-4 mr-4 text-xl'>
                    <FaGlobe />
                </div>  
            <Link target='_blank' to='https://mkce.ac.in/' className='mt-4 text-lg font-semibold block text-center text-white'>mkce.ac.in</Link>
            </div>

        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact
