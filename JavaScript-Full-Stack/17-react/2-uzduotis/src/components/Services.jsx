import React from 'react'
import './Services.css'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'


const Services = () => {
  return (
    <div className='services-wrapper'>
        <h2>Our Services</h2>
        <Service1 />
        <Service2 />
        <Service3 />
    </div>
  )
}

export default Services