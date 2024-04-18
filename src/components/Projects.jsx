import React from 'react';
import { motion } from 'framer-motion';
import Transition from './Transition';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

let tabs = [
    { id: 'all', label: 'All' },
    { id: 'Reactjs ', label: 'Reactjs' },
    { id: ' Nextjs ', label: 'Nextjs' },
    { id: ' Mern ', label: 'Mern' },
    { id: ' TailwindCSS', label: 'TailwindCSS' },
];

function Projects({ sortedFilteredProject }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const [showAll, setShowAll] = useState(true);
    const [project, setProject] = useState(sortedFilteredProject);
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleModal = (project) => {
        setOpenModal(true);
        setSelectedProject(project);
    };

    const handleProject = (text) => {
        setActiveTab(text)
        const filterProject = sortedFilteredProject?.filter((pro) => pro?.techStack?.includes(text));
        if (text === 'all') {
            setProject(sortedFilteredProject);
        } else {
            setProject(filterProject);
        }
    };

    return (
        <div id="projects" className="container mx-auto min-h-screen">
            <h1 className="text-3xl lg:text-4xl font-bold text-center px-3 pt-8 mb-7">Featured Projects</h1>
            <div className="flex items-center flex-wrap justify-center mb-5 gap-5">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleProject(tab.id)}
                        className={`${
                            activeTab === tab.id ? 'text-white' : 'hover:text-black/50'
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: 'transparent',
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 text-white bg-black mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {project
                    ?.map((item) => (
                        <div className="bg-gray-100 space-y-3 p-4 rounded-lg" key={item?._id}>
                            <img src={item?.image?.url} alt="" />
                            <Transition>
                                <h1 className="text-2xl lmd:text-3xl font-bold">{item?.title}</h1>
                            </Transition>
                            <Transition>
                                <p className="text-gray-600">{item?.description.slice(0, 134)}...</p>
                            </Transition>
                            <Transition>
                                <motion.button
                                    onClick={() => handleModal(item)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="font-medium px-3 py-2 rounded-md bg-black text-white"
                                >
                                    View Details
                                </motion.button>
                            </Transition>
                        </div>
                    ))
                    .slice(0, showAll ? 9 : -1)}
                <ProjectModal selectedProject={selectedProject} openModal={openModal} setOpenModal={setOpenModal} />
            </div>
            <div className="text-center">
                <a onClick={() => setShowAll(!showAll)} className="relative cursor-pointer mb-8 mt-5 inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">{showAll ? 'show all' : 'show less'}</span>
                </a>
            </div>
        </div>
    );
}

export default Projects;
