import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMail } from "react-icons/io";
import { FaGlobe, FaInstagram } from "react-icons/fa";

const ContactComp = () => {
  return (
    <div className='bg-gradient-to-br from-zinc-100 to-zinc-400'>
      {/* <h1 className='pt-40 text-4xl lg:text-7xl font-anta text-center  after:block mb-20'>CONTACT</h1> */}

<div className='bg-zinc-950'>
<div className='m-20 p-5 mx-6 lg:mx-16 bg-zinc-950 '>
<h1 className='pt-20 text-4xl lg:text-7xl font-anta text-center text-white  after:block mb-20'>CONTACT</h1>
    
    <div className='flex flex-wrap gap-y-10 my-10 justify-center text-white '>
        <div className='flex flex-col  items-center lg:w-1/2 '>
            <h3 className='text-2xl text-center font-bold mb-10'>Staff Coordinators</h3>

            <div className='flex justify-center space-x-6 '>
            <div className='flex  flex-col gap-y-5 text-center'>
                <p className='text-lg font-bold'>Mr. P. Maniraj </p>
                <p className='text-lg font-bold'>Ms. T. Priyanka</p>
                <p className='text-lg font-bold'>Dr. S. Ambika</p>
            </div>

            <div className='flex flex-col gap-y-5'>
                <Link className='text-lg font-semibold text-cyan-300' to='tel:9787886643'> 9787886643</Link>
                <Link className='text-lg font-semibold text-cyan-300' to='tel:9942712798'> 9942712798</Link>
                <Link className='text-lg font-semibold text-cyan-300' to='tel:9942712798'> 9942712798</Link>
            </div>
            </div>
            
            
        </div>

        <div className='flex flex-col items-center lg:w-1/2'>
            
            <h3 className='text-2xl text-center font-bold mb-10'>Student Coordinators</h3>

            <div className='flex justify-center space-x-6 '>
                <div className='flex flex-col gap-y-5 '>
                    <p className='text-lg font-bold'>Suresh E </p>
                    <p className='text-lg font-bold'>Nandha Kumar P </p>
                    <p className='text-lg font-bold'>Dinesh Kumar M </p>
                    <p className='text-lg font-bold'>Santhoshkumar A  </p>

                    <p className='text-lg font-bold'>Sujith P </p>
                    <p className='text-lg font-bold'>Sanjay S </p>
                    <p className='text-lg font-bold'>Nithishkumar C </p>
                    <p className='text-lg font-bold'>Jayashree S  </p>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:8098010350'> 8098010350</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9787884444'> 9787884444</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9750782209'> 9750782209</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9629658496'> 9629658496</Link>

                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9944631830'> 9944631830</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9677323447'> 9677323447</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9629579369'> 9629579369</Link>
                    <Link className='text-lg font-semibold text-cyan-300' to='tel:9342534489'> 9342534489</Link>
                </div>
            </div>

        </div>
     
    

    </div>

    <div className='flex items-center justify-center'>
        <div className='text-white items-center mt-10 mr-4 text-xl'>
            <IoMdMail />
        </div>
        <h4 className='mt-10 text-lg font-semibold text-center text-white'> orlia2k24@mkce.ac.in</h4>
    </div>

    <div className='flex items-center justify-center'>
        <div className='text-white items-center mt-4 mr-4 text-xl'>
            <FaInstagram />
        </div>  
    <Link target='_blank' to='https://www.instagram.com/Orlia_2k24/' className='mt-4 text-lg font-semibold block text-center text-white'>Orlia_2k24</Link>
    </div>

    <div className='flex items-center justify-center'>
        <div className='text-white items-center mt-4 mr-4 text-xl'>
            <FaGlobe />
        </div>  
    <Link target='_blank' to='https://mkce.ac.in/' className='mt-4 text-lg font-semibold block text-center text-white'>mkce.ac.in</Link>
    </div>



</div>
</div>
    </div>
  )
}

export default ContactComp
