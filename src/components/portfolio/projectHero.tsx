
import Socials from "../socials";
import Decorator from "../decoration/decorator";
import InlineDecorator from "../decoration/inlineDecorator";
import '../loader/loader.css'
import { useInView, motion, Variants } from "motion/react";
import { useRef, useState } from "react";
import ProjectDetails from "./projectDetails";
import { AnimatePresence } from "motion/react";

export type projectHeroProps = {
    name:string,
    xOffset?:number, // converts to rem
    yOffset?:number,
    github?:string,
    timeframe?:string,
    description?:string,
    imageEnd?:string,
    extLink:string,
}

function ProjectHero({name, imageEnd="jpg", timeframe="month xxxx - month xxxx", xOffset=-3, yOffset=-3, github="",extLink, description="Some important sample text"}:projectHeroProps){
    const ref = useRef(null);
    const [expanded,setExpanded] = useState<boolean>(false);

    return (
        <motion.div layout className="w-full flex flex-col">
            <div className="flex flex-col lg:flex-row items-start bg-cl-gray-1" ref={ref}>
                <div className="relative z-10 w-fit h-full lg:w-1/2 items-end justify-items-end hero-load">
                            <div className="w-[30rem] h-[20rem] overflow-hidden rounded-xl">
                                <img 
                                    className={`w-[40rem] max-w-none`} 
                                    style={{marginTop:`${yOffset}rem`, marginLeft:`${xOffset}rem`}}
                                    width="40rem" 
                                    src={`/portfolio/heros/${name}.${imageEnd}`}
                                    />
                            </div>    
                </div>
                <div className={"relative z-0 box-border w-fit h-[20rem] overflow-hidden lg:w-1/2 flex flex-col items-start justify-start"}>
                    <div className="pl-0 pt-8 lg:pl-8 lg:w-auto h-full flex flex-col items-start justify-start hero-text-load">
                        <Socials 
                            github={github}
                        />
                        <h1 className="w-full text-center lg:text-left">{name}</h1>
                        <p>{timeframe}</p>
                        <br/>
                        <p className="w-[30rem] text-center lg:text-left">{description}</p>
                        <br/>
                        
                    </div>
                    <a className="lg:pl-8" href={extLink} target="_blank">
                        <p className="text-2xl cursor-pointer" onClick={()=>{setExpanded(!expanded)}}>
                            <Decorator>See More</Decorator>
                        </p>
                    </a>
                </div>
            </div>
        </motion.div>
    );

}



export default ProjectHero
