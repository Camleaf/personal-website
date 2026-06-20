import Socials from "../socials";
import Decorator from "../decoration/decorator";
import InlineDecorator from "../decoration/inlineDecorator";
import '../loader/loader.css'
import { useInView, motion, Variants } from "motion/react";
import { useRef } from "react";

interface propTypes{
    bigDescription?:string,
    
    onClick?:(name:string)=>void
}

function ProjectDetails({bigDescription=""}:propTypes){
    const ref = useRef(null);

    return (
        <motion.div className="w-full overflow-hidden" 
            initial={{ opacity: 0, scale: 1, height:0}}
            animate={{ opacity: 1, scale: 1, height:"auto"}}
            exit={{ opacity: 0, scale: 1, height:0}}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            layout
        >
        <div className="flex flex-col w-full lg:flex-row items-start pb-8" ref={ref}>
            <div className={"relative z-0 box-border w-full h-auto overflow-hidden flex flex-col items-start justify-start"}>
                <div className="pl-0 pt-8 lg:pl-8 lg:w-auto h-auto flex flex-col items-start justify-start">
                    <p className="text-center lg:text-left">{bigDescription}</p>
                    <br/>
                    
                </div>
            </div>
        </div>
        </motion.div>
    );

}



export default ProjectDetails;
