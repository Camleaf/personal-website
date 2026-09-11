
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
        </motion.div>
    );

}



export default ProjectHero
