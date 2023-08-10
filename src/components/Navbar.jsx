import React from 'react'
import technowlogo from '../assets/Images/technowlogo.png'


const Navbar = () => {
    return (
        <nav className="w-screen flex justify-between items-center fixed bg-black bg-opacity-90 border-b-2 border-white z-50 px-20 py-4 ">
            <div className="basis-1/4 text-white pl-7 ">
                <img src={technowlogo} alt="" />
            </div>
            <div className="basis-3/4 flex justify-between items-center text-white text-sm pr-7 ">
                <h1>About</h1>
                <h1>Partners</h1>
                <h1>Advantages</h1>
                <h1>Services</h1>
                <h1>Skills</h1>
                <h1>Products</h1>
                <h1>Contact</h1>
            </div>
        </nav>
    )
}

export default Navbar
