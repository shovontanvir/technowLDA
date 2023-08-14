import { Navigation, Autoplay,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import ServiceCard from "../components/ServiceCard";
import ServiceData from "../DummyData/ServiceData";

const Service = () => {
  return (
    <section className="">
      <div className=" lg:px-28 px-10 text-center">
        <h3 className=" pt-20 text-2xl text-slate-400 font-semibold "> SERVICES</h3>
        <h1 className="text-6xl pb-10">What we do</h1>
        <p className="text-base font-normal lg:px-64 pb-14">Technow strives to be a reliable and trusted partner, working closely with our clients to ensure their success in today's rapidly evolving technology landscape. Our team of experts is committed to delivering high-quality services and exceptional customer support, helping our clients achieve their goals and stay ahead of the competition. Explore our services below to learn more.</p>

      </div>
      <div className="flex lg:px-28 px-5 py-10">
        <Swiper
        breakpoints={{
          '640px': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768px': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024px': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1280px': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper flex flex-wrap">
        {ServiceData.map((item) => (
          <SwiperSlide className='basis-1/3 px-5'>
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
      {/* loop swiper */}
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            
        }}
        
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
    >
    <div>
    <p className="loopslider bg-slate-100 text-base py-2 ">
            <span className='text-xl font-semibold'>From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World  From Sustainable Solutions to Sustainable Partnerships: Technow has a Vision for a Better World</span>
        </p>

    </div>
    </Swiper>
    </section>
  );
};

export default Service;
