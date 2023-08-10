
import React from 'react'
import ourservicebtn from '../assets/Images/our-service-btn.png'
import contactusbtn from '../assets/Images/contact-us-btn.png'


const Home = () => {
  return (
    <section className='h-screen flex  bg-homeback bg-cover'>
        <div className='px-28 py-48 basis-2/3 '>
            <h1 className=' font-bold text-8xl text-white '>
            We <span className='text-[#FF7069]'>enrich</span> lives through <span className='text-[#FF7069]'>better</span> user expirience
            </h1>
            <p className=' text-white text-2xl font-normal py-6 tracking-wide'>
            Cloud E-Commerce Web Software Desktop Hardware Mobile
            </p>
            <div className=' flex py-10 gap-5'>
                <div>
                  <button className=''>
                      <img src={ourservicebtn}  />
                  </button>
                </div>
                <div>
                  <button className=''>
                      <img src={contactusbtn} />
                  </button>
                </div>
            </div>
        </div>
        
            
        
    </section>
    
  )
  

}

export default Home
