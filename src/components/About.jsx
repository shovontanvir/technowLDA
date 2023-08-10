import { Navigation, Autoplay,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'


const About = () => {
    return (
        <section className=''>
            <div className='px-28 py-24'>
                    <h5 className='text-2xl font-bold text-slate-400 gap-2'>About</h5>

                    <h1 className='text-6xl font-semibold pb-10'>
                        Who We Are
                    </h1>
                    <div className='flex mt-6'>
                        <div className='basis-2/3 pr-2 '>
                            <p className='text-2xl' > <span className='font-bold'> Technow </span> is a leading system integration company providing innovative and high-quality IT solutions to businesses in Angola and beyond. We are passionate about crafting personalized solutions that align with our clients' unique needs and helping them achieve their business goals. We don't believe in a one-size-fits-all approach and hence, we invest time in understanding our clients' requirements, vision and pain points. </p><br />
                            
                            <p className='text-2xl'>Technow provides a wide range of cutting-edge technology services and team of experienced professionals to help businesses achieve their boldest ambitions and build sustainable enterprises.</p>
                        </div>
                        <div className='basis-1/3 '>
                            <h3 className='text-5xl pl-10 pr-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01a1c3] from-0%  via-[#e36392] via-30% to-[#e66337] to-90% '>Partnering for Growth, Sustainability, and Innovation</h3>
                            <br /><h3 className='text-5xl font-normal pl-10 pr-24'> Our Vision and Promise </h3>
                        </div>
                    </div>
            </div>
                    <div>
                        <p class="loopslider bg-slate-100 text-base py-2 ">
                                <span className='text-xl font-semibold'>From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World  From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World;</span>
                        </p>
                    

                    </div>
            

        </section>
    )
}

export default About
