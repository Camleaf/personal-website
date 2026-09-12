import {motion} from "motion/react"
import Timeline from "../components/portfolio/timeline";
import "../index.css";
import Decorator from "../components/decoration/decorator";
import { Link } from "react-router-dom";

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
                    <div className="flex flex-row gap-4 flex-wrap text-justify mb-10 justify-center">
                    <p className="text-3xl ">
                        <Link to="/">
                            <Decorator> home </Decorator>
                        </Link>
                    </p>
                    <p className="text-3xl ">
                        <a href="./resume.pdf" target="_blank">
                            <Decorator> resume </Decorator>
                        </a>
                    </p>
                    
                    <p className="text-3xl ">
                        <Link to="/experience">
                            <Decorator> experience </Decorator>
                        </Link>
                    </p>
                </div>
                    <Timeline />
                    <div className="my-32"/>
                </motion.div>
            </div>
        </>
    );
}

export default Portfolio;
