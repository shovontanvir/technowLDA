import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import ServiceCard from "../components/ServiceCard";
import ServiceData from "../DummyData/ServiceData";
import next from '../assets/Images/next.png'

const Service = () => {
  return (
    <section className="" id='services'>
      <div className=" lg:px-28 px-9 text-center">
        <h3 className=" pt-20 text-2xl text-slate-400 font-semibold "> SERVICES</h3>
        <h1 className="text-6xl pb-10">What we do</h1>
        <p className="text-base font-normal lg:px-64 pb-14">Technow strives to be a reliable and trusted partner, working closely with our clients to ensure their success in today's rapidly evolving technology landscape. Our team of experts is committed to delivering high-quality services and exceptional customer support, helping our clients achieve their goals and stay ahead of the competition. Explore our services below to learn more.</p>

      </div>
      
      <div className=" lg:px-28 px-5 ">
        <Swiper
        breakpoints={{
          '640': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="mySwiper ">
        {ServiceData.map((item) => (
          <SwiperSlide className=' px-5'>
          <ServiceCard
            key={item.id}
            image={item.image}
            altDesc={item.heading}
            heading={item.heading}
            subHeading={item.subHeading}
            description={item.description}
          />
          </SwiperSlide>
        ))}
        </Swiper>
        
        
      </div>
      <div className='items-end'>
          <a href="">
            <button>
              <img src={next} alt="" />
            </button>
          </a>
        </div>
      
      {/* loop swiper */}
    
    <div className='py-16'>
      <p className="loopslider py-2 border-[#DBE0F2] ">
        <infinity className='text-xl font-semibold'> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> </infinity>
      </p>
    </div>
  
    </section>
  );
};

export default Service;
