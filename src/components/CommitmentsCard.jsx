import React from 'react'

const CommitmentsCard = ( {image, heading, description} ) => {
  return (
    
    
      <div className=' basis-1/3 p-5 m-2 border-2 border-[#e36392] border-t-[#e66337] rounded-3xl  '>
      <div className='flex justify-between py-7'>
        <h1 className='text-2xl font-semibold '>{heading}</h1>
        <img src={image} alt="" />
      </div>
        <p className='text-2xl font-normal pb-20 pr-10 ' > {description} </p>
      
    </div>
    
  );
};

export default CommitmentsCard;
