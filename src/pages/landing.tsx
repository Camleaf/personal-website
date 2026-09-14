import { AnimatePresence, motion } from "motion/react"
import { Link } from "react-router-dom"
import Decorator from "../components/decoration/decorator"
import InlineDecorator from "../components/decoration/inlineDecorator"
import '../components/loader/loader.css'
import Socials from "../components/socials"
import Navtext from "../components/navtext"


function Landing() {
    return (
            <motion.div 
                initial={{ opacity: 1, scale: 1, y: "-75vh" }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                // 2. The critical Exit state when it leaves the DOM
                exit={{ opacity: 0, scale: 1, y: "-75vh" }}
                // Global timing control
                transition={{ duration: 0.5, ease: 'easeInOut' }}            
            >
           <div className="w-full cont h-full flex flex-col md:flex-row items-center justify-center z-1">

                <div className="hidden lg:flex lg:justify-end z-10 w-fit h-full items-end justify-items-end hero-load ml-[0rem] lg2:ml-[-5rem]">
                    <div className="w-fit h-fit overflow-hidden rounded-xl">
                        <img id="" className="w-[40rem] max-w-none mt-[-12rem]" src="/hero.png"/>
                    </div>    
                </div>
                <div className={"box-border w-full md:w-fit h-full pl-8 overflow-hidden flex flex-row lg:flex-col items-center lg:items-start justify-center z-0 flex-wrap"}>
                    <div className="pt-0 w-auto flex flex-col items-start justify-center hero-text-load">
                        <Socials 
                            github="https://github.com/Camleaf"
                            linkedin="https://www.linkedin.com/in/alexander-edwards-1a6879342/"
                            instagram="https://instagram.com/_alexcedw"
                            email="mailto:bdaace09@gmail.com"
                        />
                        <h1 className="w-full text-left">alex edwards</h1>

                        <br/>
                        <p className="w-96 text-left">Robotics & STEM-focused highschool student from Ontario, Canada</p>
                        <br/>
                         
                    </div>
                    <div className="flex flex-col gap-4 hero-text-load ">
                       <Navtext/> 
                    </div> 
                </div>
                
                
            </div>
            </motion.div>
    )
}

export default Landing
