import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navlink = (
        <>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Home</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                <li className="nav-link">About</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Skills</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Projects</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="services" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Services</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="timeline" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Timeline</li>
            </Link>
            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="testimonial" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Testimonial</li>
            </Link>

            <Link onClick={()=>setIsOpen(false)} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                <li className="nav-link">Contact</li>
            </Link>
        </>
    );

    return (
        <div className="shadow-md">
            {/* Large Device Navigation */}
            <nav className="flex items-center justify-between container mx-auto p-4">
                <div>
                    <h1 className="text-3xl font-semibold">Portfolio</h1>
                </div>
                <ul className="lg:flex hidden space-x-4">{navlink}</ul>
                <div className={`ml-${isOpen ? '64' : '0'} lg:hidden transition-all duration-300`}>
                    <button
                        onClick={toggleSidebar}
                        className={`text-black px-3 py-2 rounded-lg focus:outline-none ${isOpen ? 'hidden' : ''} lg:hidden`}
                    >
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed bg-white w-full h-screen bottom-0 left-0 z-30 lg:hidden"
                    >
                        <div className="p-6 flex justify-end items-center">
                            <button onClick={toggleSidebar} className="text-black focus:outline-none text-right focus:text-black">
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
                            className="flex space-y-3 flex-col items-center justify-center"
                        >
                            {navlink}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
