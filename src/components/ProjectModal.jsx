import { IoMdClose } from "react-icons/io";
import { VscGithubInverted } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

const ProjectModal = ({openModal,setOpenModal,selectedProject}) => {
    return (
         <div className="mx-auto p-4">
        <div
          onClick={() => setOpenModal(false)} 
          className={`fixed z-[100] flex p-5 items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-[550px] mx-4 rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 h-[90vh] overflow-y-scroll   dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
            <span className="cursor-pointer mb-3" onClick={()=>setOpenModal(false)}><IoMdClose size={25} /></span>
            <img className="mt-5" src={selectedProject?.image?.url} alt="" />
            <h1 className="mb-2 mt-2 text-2xl font-semibold">{selectedProject?.title}</h1>
            <p className="mb-4 text-sm opacity-80 ">{selectedProject?.description}</p>
            <div className="flex flex-wrap items-center gap-3">
                <h6 className="font-medium">Stack used : </h6>
                {
                    selectedProject?.techStack?.map((i,idx)=><p className="px-3 py-1 border-[2px] border-white rounded-full" key={idx}>{i}</p>)
                }
            </div>
            <div className="flex mt-2 flex-wrap items-center gap-3">
                <h6 className="font-medium">Links: </h6>
                <div className="flex items-center gap-2">
                    <a href={selectedProject?.githuburl}><VscGithubInverted size={20} /></a>
                    <a href={selectedProject?.liveurl}><LuExternalLink size={20} /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectModal;
