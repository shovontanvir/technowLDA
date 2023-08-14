import { Navigation, Autoplay,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'


const About = () => {
    return (
        <section className='' id='about' >
            <div className='lg:px-28 px-10 py-24'>
                    <h5 className='text-2xl font-bold text-slate-400 gap-2'>About</h5>

                    <h1 className='lg:text-6xl text-4xl  font-semibold pb-10'>
                        Who We Are
                    </h1>
                    <div className='flex flex-col-reverse lg:flex-row  mt-6 md '>
                        <div className=' basis-2/3 lg:pr-2 pr-0 flex-1 flex-col '>
                            <p className='text-2xl' > <span className='font-bold'> Technow </span> is a leading system integration company providing innovative and high-quality IT solutions to businesses in Angola and beyond. We are passionate about crafting personalized solutions that align with our clients' unique needs and helping them achieve their business goals. We don't believe in a one-size-fits-all approach and hence, we invest time in understanding our clients' requirements, vision and pain points. </p><br />
                            
                            <p className='text-2xl'>Technow provides a wide range of cutting-edge technology services and team of experienced professionals to help businesses achieve their boldest ambitions and build sustainable enterprises.</p>
                        </div>
                        <div className='basis-1/3 flex-1 lg:pl-10 pl-0'>
                            <h3 className='lg:text-5xl text-3xl pr-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01a1c3] from-0%  via-[#e36392] via-30% to-[#e66337] to-90% '>Partnering for Growth, Sustainability, and Innovation</h3>
                            <br /><h3 className='lg:text-5xl text-3xl  font-normal pr-24 pb-10 lg:pb-0'> Our Vision and Promise </h3>
                        </div>
                    </div>
            </div>
                    <div>
                        <p className="loopslider bg-slate-100 text-base py-2 ">
                                <span className='text-xl font-semibold'>From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World  From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World;</span>
                        </p>
                    

                    </div>
            

        </section>
    )
}

export default About
