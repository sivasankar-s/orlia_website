import React from 'react'
import { events } from '../events'
import EventCard from './EventCard'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <>
    
    <div className='pt-24 lg:pt-44 px-6 sm:px-16 bg-gradient-to-br from-violet-700 to-pink-500'>

    <h1 className='font-anta text-2xl lg:text-6xl   after:block text-center mb-12 '>EVENTS</h1>

    <div className=' w-full mt-14 justify-start grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-10 gap-y-10 pb-10'>
      {events.map(event => (
        <Link to={event.url} target='_blank'>
        <EventCard name={event.name} imgUrl={event.imgUrl} desc={event.description}></EventCard>
        </Link>
      ))}
    </div>
    </div>
    </>
  )
}

export default Events
