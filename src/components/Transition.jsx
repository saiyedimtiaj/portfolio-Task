import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Transition = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref,{ once:true })
    const mainControls = useAnimation()
    const sideControls = useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
            sideControls.start("visible")
        }
    },[isInView,mainControls,sideControls])
    return (
        <div ref={ref} className="relative overflow-hidden">
           <motion.div
            variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.25}}
           > {children}</motion.div>
           <motion.div
            variants={{
                hidden:{left:0},
                visible:{left:"100%"}
            }}
            initial='hidden'
            animate={sideControls}
            transition={{duration:0.5,ease:'easeIn'}}
            className="absolute top-1 bottom-1 left-0 right-0 z-20"
           />
        </div>
    );
};

export default Transition;