import React from 'react'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpg'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.jpg'
import i4 from '../assets/i4.jpg'
import i5 from '../assets/i5.jpg'
import i6 from '../assets/i6.jpg'
import i7 from '../assets/i7.jpg'
import i8 from '../assets/i8.jpg'
import i9 from '../assets/i9.jpg'
import i10 from '../assets/i10.jpg'
import i11 from '../assets/i11.jpg'
import { Carousel } from 'flowbite-react'

const CarouselComp = () => {
  return (
    
<>

<div className="h-56 mt-0 sm:h-604 xl:h-80 2xl:h-[75vh]">
      <Carousel slideInterval={1000}>
        <img src={i3} className='overflow-visible' alt="..." />
        <img src={i2} className='overflow-visible' alt="..." />
        <img src={i1} className='overflow-visible' alt="..." />
        <img src={i4} className='overflow-visible' alt="..." />
        <img src={i5} className='overflow-visible' alt="..." />
        <img src={i6} className='overflow-visible' alt="..." />
        <img src={i7} className='overflow-visible' alt="..." />
        <img src={i8} className='overflow-visible' alt="..." />
        <img src={i9} className='overflow-visible' alt="..." />
        <img src={i10} className='overflow-visible' alt="..." />
        <img src={i11} className='overflow-visible' alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>

</>

  )
}

export default CarouselComp
