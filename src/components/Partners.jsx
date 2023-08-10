import React from 'react'
import hplogo from '../assets/Images/hp.png'
import microsoftlogo from '../assets/Images/microsoft.png'
import delllogo from '../assets/Images/dell.png'
import logitechlogo from '../assets/Images/logitech.png'

const Partners = () => {
  return (
    <section className='text-center flex justify-center px-28 py-24  '>
        <div className=' py-16 px-56 border-2 border-[#e36392] border-t-[#e66337] rounded-3xl '>
        <h3 className='text-2xl text-slate-400 font-normal '>Partners</h3>
      <h1 className='font-semibold text-6xl pb-10'>Unlock a brighter future together</h1>
      <p className='text-base font-normal pb-5'>At Technow, we work closely with our partners to foster a relationship that is built on shared values, objectives, and a commitment to excellence. Through our partner ecosystem, we collaborate to create innovative solutions to provide our clients with the best possible service and support to help them achieve their goals.</p>
      <div className='flex items-center justify-center gap-10'>
      <img src={hplogo} alt="hp" className='px-5' />
      <img src={microsoftlogo} alt="microsoft" className='pr-5' />
      <img src={delllogo} alt="dell" className='' />
      <img src={logitechlogo} alt="logitech" />      
      </div>

      </div>
    </section>
  )
}

export default Partners