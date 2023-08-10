import React from 'react'
import footerlogo from '../assets/Images/technowlogo.png'


const Footer = () => {
return (
    <section className=' text-left flex flex-col  bg-black '> 
    
        <div className='flex pb-5 px-28'>
                <img src={footerlogo} alt="Technow" className='  pr-6  pt-14 pb-4' />
                <p className=' pt-14 w-2/3 pr-10  text-sm text-white font-normal leading-6 '>
                From Consumer centric to Enterprise, Telecom and Government, Technow LDA works alongside our clients to design and develop mobile, web and desktop software applications to deliver context-aware and adaptive experience. 
                </p>
            <div className='justify-start w-2/3'>
                <p className='text-white pl-24 pt-12 font-semibold uppercase'>
                Contact
                </p>
                <p className='text-white pl-24 font-normal text-sm'>
                Technow LDA <br />
                Bairro AlvaladeRua Cmdte. <br /> 
                GikaEdif n 279, 2 AndarMaianga, Luanda, Angola
                </p>
            
            </div>
            
        </div>
        <div className='flex  text-white pt-5 pb-4 justify-between border-t-2  px-28' >
                    <p className=' text-sm font-normal '>
                    © 2017 Technow LDA. All rights reserved.

                    </p>
                    <p className='text-sm font-normal pr-28  '>
                    Developed By B-Trac Solution Team
                    </p>
                    <p className='text-sm font-normal'>
                    To the top
                    </p>
        </div>


    </section>
    )
}

export default Footer
