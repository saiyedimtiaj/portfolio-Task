import React from 'react';
import { motion } from 'framer-motion';
import Transition from './Transition';

const Hero = ({aboutinfo}) => {
    return (
        <div id='home' className='container mx-auto px-3 min-h-[calc(100vh-68px)]'>
            <div className='flex flex-col my-10 gap-y-6 items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={aboutinfo?.avatar?.url} className='w-40 h-40 rounded-full object-cover' alt="" />
                </motion.div>
                <div>
                    <Transition>
                        <h1 className='text-[28px] text-center md:text-5xl lg:text-6xl font-extrabold'>Hello!I am {aboutinfo?.name}</h1>
                    </Transition>
                    <Transition>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl -tracking-tighter font-semibold'>{aboutinfo?.title}</h1>
                    </Transition>
                </div>
                <Transition>
                    <p className='text-xl font-medium text-center'>{aboutinfo?.subTitle}</p>
                </Transition>
                <Transition>
                    <button className="w-36 h-16 border-2 border-black text-blue-600 font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-black group-hover:bg-black group-hover:duration-500 -z-10"></span>Let's talk</button>
                </Transition>
            </div>
        </div>
    );
};

export default Hero;
