import { AnimatePresence, motion } from "motion/react"
import { Link } from "react-router-dom"
import Decorator from "../components/decoration/decorator"
import InlineDecorator from "../components/decoration/inlineDecorator"
import '../components/loader/loader.css'
import Socials from "../components/socials"
import Navtext from "../components/navtext"


function About() {
    return (
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
                     <Navtext/> 
                    </div>
                    Hello There
                    <div className="my-32"/>
                </motion.div>
            </div>
    )
}

export default About; 
