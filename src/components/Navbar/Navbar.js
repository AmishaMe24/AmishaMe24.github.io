import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.png';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Projects' },
        { id: 4, text: 'Contact' },
    ];

    return (
        <div className='bg-white flex justify-between items-center h-20 w-full pr-4 text-black'>
            {/* Logo */}
            <img src={logo} alt="Amisha Mehta" className='ml-[-20px] md:ml-[-10px] w-[150px] h-[150px]' />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex' style={{ paddingRight: '80px' }}>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='mx-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-200 bg-white text-black shadow-lg ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed h-full top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <img src={logo} alt="Amisha Mehta" style={{ width: "150px", height: "150px", margin: "-30px" }} />

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='m-2 px-3 py-2 border-b border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;