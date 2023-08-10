import React from 'react'
import AdvantagesCard from '../components/AdvantagesCard'
import AdvantagesData from '../DummyData/AdvantagesData'

const Advantages = () => {
    return (
    <section className='  px-28 py-10'>        
    <div className=' flex flex-wrap items-end justify-end'>
        
            { AdvantagesData.map ((item, index) => (
                
                < AdvantagesCard
                    key={item.id}
                    heading={item.heading}
                    keayheading={item.keyheading}
                    visionheading={item.visionheading}
                    description={item.description}
                    visiondes={item.visiondes}
                    className={index === 0 ? 'basis-1/2' : 'basis-1/4'}
                    
                    
                />
            ))}

        </div>
        
    </section>
    )
}

export default Advantages
