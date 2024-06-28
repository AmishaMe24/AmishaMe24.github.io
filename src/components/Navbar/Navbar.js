import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolledPastHome, setScrolledPastHome] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', path: 'home' },
        { id: 2, text: 'About', path: 'about' },
        { id: 3, text: 'Education', path: 'education' },
        { id: 4, text: 'Experience', path: 'experience' },
        { id: 5, text: 'Projects', path: 'projects'}
    ];

    useEffect(() => {
        const handleScroll = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    if (entry.target.id === 'home') {
                        setScrolledPastHome(false);
                    } else {
                        setScrolledPastHome(true);
                    }
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleScroll, options);

        navItems.forEach(item => {
            const section = document.getElementById(item.path);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            navItems.forEach(item => {
                const section = document.getElementById(item.path);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [navItems]);

    return (
        <div className={`bg-white fixed top-0 left-0 w-full flex justify-between items-center h-[4rem] pr-4 text-black z-50 ${scrolledPastHome ? 'shadow-md' : ''}`}>
            {/* Logo */}
            <img src={logo} alt="Amisha Mehta" className='ml-[-20px] md:ml-[-10px] w-[150px] h-[150px]' />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex' style={{ paddingRight: '80px' }}>
                {navItems.map(item => (
                    <a
                        key={item.id}
                        href={`#${item.path}`}
                        className={`mx-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ${activeSection === item.path ? 'bg-gray-100 text-gray-900' : ''
                            }`}
                    >
                        {item.text}
                    </a>
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
                        <a
                            key={`link-${item.id}`}
                            href={`#${item.path}`}
                            onClick={handleNav}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;