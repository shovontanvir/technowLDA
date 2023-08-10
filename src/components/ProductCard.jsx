import React from 'react'

const ProductCard = ({ image, heading, description, subdescription  }) => {
  return (
    <div className='basis-1/2 p-5  border-2 border-[#e36392] border-t-[#e66337] rounded-3xl'>
      <div>
        <img src={image} alt="" />
        <h1 className='text-2xl font-semibold py-10'>{heading}</h1>
        <p className='text-2xl font-normal pb-16 '>{description}</p>
        <p className='text-2xl font-normal text-[#FF7069]'>{subdescription}</p>

      </div>
    </div>
  )
}

export default ProductCard;