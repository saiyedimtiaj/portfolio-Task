import React from 'react';
import rocket from '../assets/icons8-rocket-100.png'
import Transition from './Transition';

function About({ aboutinfo }) {
    const avater = aboutinfo?.alternateAvatars[0]?.url;
    return (
        <section id="about" className='container min-h-screen mx-auto px-3'>
            <div className="">
                <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6">About Me</h1>
                <div className="flex gap-10 items-start flex-col md:flex-row">
                    <div className='lg:w-1/4 w-[300px] flex items-center justify-center'>
                        <img className='w-full rounded-md mx-auto text-center' src={avater} alt="" />
                    </div>
                    <div className='lg:w-3/4 w-full h-full'>
                      <Transition>
                      <h1 className="text-3xl font-bold mb-3">{aboutinfo?.name}</h1>
                      </Transition>
                     <Transition>
                     <div className='flex items-center gap-1'>
                      <img className='w-7' src={rocket} alt="" />
                      <h3 className='text-xl font-semibold'>{aboutinfo?.title}</h3>
                      </div>
                     </Transition>
                     <Transition>
                     <p>{aboutinfo?.description}</p>
                     </Transition>
                        <Transition>
                        <p className='mt-2'>{aboutinfo?.address}</p>
                        </Transition>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
