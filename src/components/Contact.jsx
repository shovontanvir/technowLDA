import React from 'react'
import sentbtn from '../assets/Images/sent-btn.png'
import Map from '../components/Map'




const Contact = () => {
    
  return (
    <section className='px-28 py-20 flex '>
        <div className='basis-3/5 px-10 rounded-xl overflow-clip'>
            <Map />
        </div>
        <div className='basis-2/5 '> 
            <h3 className='uppercase text-2xl font-semibold text-slate-400 ' > contacts </h3>
            <h1 className='text-6xl font-bold pb-10 '> Get in touch </h1>
            <p className=' text-base font-normal pb-12 '>We are always looking forward to new challenges, opportunities and interesting projects. So feel free to contact us. <br /><br />
                        Office hours: Sunday to Thursday, 9:30 am – 6:30 pm.</p>
        <form action="submit" className="">
    
                
                <p className='text-base font-normal'>Email</p>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Addres"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-3 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />
                <p className='pt-5 text-base font-normal' >Name</p>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-3 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />
                <p className='pt-5 text-base font-normal'>Message</p>
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-5 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />

                <button type="submit" className=" pt-10 py-2 focus:outline-none">
                    <img src={sentbtn} />
                </button>
        </form>
                        
        </div>
    </section>
  )
}

export default Contact
