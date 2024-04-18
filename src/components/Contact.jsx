import React from 'react';
import { motion } from 'framer-motion';
import Transition from './Transition';

function Contact({ aboutinfo, social }) {
    return (
        <div id="contact" className="container mx-auto min-h-screen">
            <div className="px-3 py-7">
                <h1 className="text-3xl lg:text-4xl font-bold px-3 pt-8 mb-7">Let's work togather</h1>
                <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-20">
                    <form className="w-full">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="w-full">
                                <br />
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="w-full py-1.5 border-b-2 focus:outline-none border-black"
                                />
                            </div>
                            <div className="w-full">
                                <br />
                                <input
                                    type="text"
                                    required
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full py-1.5 border-b-2 focus:outline-none border-black"
                                />
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <br />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter Your Email"
                                className="w-full py-1.5 border-b-2 focus:outline-none border-black"
                            />
                        </div>
                        <div>
                            <br />
                            <textarea
                                placeholder="Enter Your Message"
                                name="message"
                                rows="3"
                                required
                                className="w-full py-1.5 border-b-2 focus:outline-none border-black"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-medium mt-4 px-3 py-2 rounded-md bg-black text-white"
                        >
                            View Details
                        </motion.button>
                    </form>
                    <div className="w-full lg:pt-8">
                        <Transition>
                            <h5 className="text-xl font-medium">Get In Touch</h5>
                        </Transition>
                        <Transition>
                            <h1 className="text-2xl md:text-5xl font-bold mt-3">{aboutinfo?.contactEmail}</h1>
                        </Transition>
                        <Transition>
                            <p className="text-lg font-medium mt-5">{aboutinfo?.phoneNumber}</p>
                        </Transition>
                        <Transition>
                            <p className="text-lg font-medium">{aboutinfo?.address}</p>
                        </Transition>
                        <Transition>
                            <div className="flex gap-3 md:gap-5 mt-7 items-center">
                                {social?.map((social) => (
                                    <a className="nav-link text-base" href={social?.url} key={social?._id}>
                                        {social?.platform}
                                    </a>
                                ))}
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
