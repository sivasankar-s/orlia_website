import React from 'react'
import { Link } from 'react-router-dom'

const RegisterButton = ({pref}) => {
  return (
    <div ref={pref} className='flex justify-center mt-10'>
        <Link target='_blank' to='https://forms.gle/eEheENwiwWjZRJeu6'
        className='font-orbitron bg-gradient-to-r from-orange-600 to-yellow-400 border-4 hover:border-4 hover:border-black transition-all ease-in-out py-5 px-10 text-xl font-semibold rounded-full'
        >
            Register Now
        </Link>
    </div>
  )
}

export default RegisterButton