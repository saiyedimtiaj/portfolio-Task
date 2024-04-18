import React from 'react';
import SkillMarque from './SkillMarque';

function Skills({ skillset }) {
    return (
        <div className="min-h-screen" id="skills">
            <div className="container mx-auto px-3">
                <h1 className="text-3xl text-center md:text-5xl font-bold py-3 md:py-5 lg:py-7">Skills</h1>
                <SkillMarque speed={70} direction={'right'} skillset={skillset} />
                <SkillMarque speed={140} direction={'left'} skillset={skillset} />
                <SkillMarque speed={70} direction={'right'} skillset={skillset} />
            </div>
        </div>
    );
}

export default Skills;
