import React from 'react';
import Transition from './Transition';

function Services({ filteredServices }) {
    return (
        <div className="min-h-screen" id='services'>
            <div className="container mx-auto px-3">
                <h1 className="text-3xl text-center md:text-5xl font-bold py-8">Services We Provide</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredServices?.map((service) => (
                        <div key={service?._id} className="flex flex-col bg-gray-200 rounded-lg items-center justify-center p-5 gap-2">
                            <img src={service?.image?.url} className="w-36" alt="" />
                            <Transition>
                                <h1 className="text-xl font-semibold">{service?.name}</h1>
                            </Transition>
                            <Transition>
                                <p className="font-medium text-center text-gray-500">{service?.desc}</p>
                            </Transition>
                            <Transition>
                                <h2 className="text-3xl font-bold">{service?.charge}</h2>
                            </Transition>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
