import React from 'react'
import CommitmentsCard from '../components/CommitmentsCard';
import CommitmentsData from '../DummyData/CommitmentsData';

const Commitments = () => {
  return (
    <section className='px-28 py-24'>
        <div className='flex gap-5 '>
            {CommitmentsData.map((item) => (
                < CommitmentsCard
                    key={item.heading}
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                />
            ))}
        </div>

    </section>
  );
};

export default Commitments;
