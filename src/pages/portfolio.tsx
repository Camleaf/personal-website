import {motion} from "motion/react"
import ProjectHero from "../components/portfolio/projectHero";
import Timeline from "../components/portfolio/timeline";
import "../index.css";

function Portfolio() {


        
    



    return (
        <>
            <div className="w-full h-full flex items-start justify-center pt-[10vh]">
                <motion.div 
                    initial={{ opacity: 1, scale: 1, y: "85vh" }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    // 2. The critical Exit state when it leaves the DOM
                    exit={{ opacity: 0, scale: 1, y: "85vh" }}
                    // Global timing control
                    transition={{ duration: 0.5, ease: 'easeInOut' }}            
                >
                    <Timeline />

                </motion.div>
            </div>
        </>
    );
}

export default Portfolio;
