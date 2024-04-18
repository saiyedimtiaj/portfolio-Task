import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillMarque = ({ skillset,direction,speed }) => {
    return (
        <Marquee speed={speed} direction={direction}>
            <div className="flex gap-7 items-center">
                {skillset?.map((skill) => (
                    <div className="flex items-center justify-center gap-2" key={skill?._id}>
                        <p className="md:w-5 w-2.5 h-2.5 md:h-5 lg:w-6 lg:h-6 bg-black rounded-full"></p>
                        <h1 className="text-4xl md:text-5xl py-5 font-bold lg:text-7xl">{skill?.name}</h1>
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

export default SkillMarque;
