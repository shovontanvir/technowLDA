import React, { useState } from 'react'
import technowlogo from '../assets/Images/technowlogo.png'
import menu from '../assets/Images/menu.png'
import close from '../assets/Images/close.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState( true );
    let links =[
        {name: "About", link:"/" },
        {name: "Partners", link:"/" },
        {name: "Advantages", link:"/" },
        {name: "Services", link:"/" },
        {name: "Skills", link:"/" },
        {name: "Experience", link:"/" },
        {name: "products", link:"/" },
        {name: "Contact", link:"/" }
    ]
    // const handleMenuOpen = ( prevState ) =>{
        // setIsOpen ( !prevState )
    // }
    
    return (
        <nav className="w-screen lg:flex justify-between items-center fixed bg-black bg-opacity-90 border-b-2 border-white z-50 px-20 py-4">
            <div className="basis-1/4 lg:w-32 w-24 py-2 lg:pl-4 ">
                <img src={technowlogo}/>
            </div>
            <div className='absolute items-center right-20 top-10 cursor-pointer md:hidden'>
                
                <img src={ !isOpen ? menu : close } width={30}   onClick ={ () => setIsOpen(prevState => !prevState)  } />
                
            </div>

            {/* <div className="basis-3/4 flex justify-between items-center text-white text-sm pr-7 transition-all  */}
                            {/* duration-500 md:static right-0 md:w-full w-[100vw] h-[80vw] md:h-auto p-5 top-[100%] -left-[500%] "> */}
                {/* <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:ml-auto'> */}
                    {/* { */}
                        {/* links.map ((link) =>( */}

                            {/* <li> */}
                                {/* <a href={link.link} className='hover:scale-110 duration-300 py-1 hover:text-[#FF7069] font-sos font-bold items-center'>{link.name}</a> */}
                            {/* </li> */}

                            {/* )) */}
                    {/* } */}
                {/* </ul> */}
            {/* </div> */}
        </nav>
    )
}

export default Navbar
