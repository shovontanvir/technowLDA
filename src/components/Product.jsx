import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductData from '../DummyData/ProductData'

const Product = () => {
  return (
    <section className='px-28 py-10'>
      <div className='text-center  '>
        <h3 className='uppercase text-2xl font-semibold text-slate-400'> Products </h3>
        <h1 className=' text-6xl font-bold pb-10 '> Products </h1>
      </div>
        <div className='flex gap-5'>
            {ProductData.map((item) => (
                < ProductCard
                    key={item.heading}
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                    subdescription={item.subdescription}
                />
            ))}
        </div>
    </section>
  );
};

export default Product;
