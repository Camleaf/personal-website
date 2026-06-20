import { AnimatePresence, motion } from "motion/react"
import { Link } from "react-router-dom"
import Decorator from "../components/decoration/decorator"
import InlineDecorator from "../components/decoration/inlineDecorator"
import '../components/loader/loader.css'
import Socials from "../components/socials"


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
            <div className="w-full cont h-full flex flex-col lg:flex-row items-center">
                <div className="sm:hidden lg:flex z-10 w-fit h-full flex-1 items-end justify-items-end hero-load">
                    <div className="w-fit h-fit overflow-hidden rounded-xl">
                         <img id="" className="w-[40rem] max-w-none mt-[-12rem]" src="/hero.png"/>
                    </div>    
                </div>
                <div className={"relative z-0 box-border w-fit h-full overflow-hidden flex-1 flex flex-row items-start justify-start"}>
                    <div className="pt-0 pl-8 w-auto flex flex-col items-start justify-center hero-text-load">
                        <Socials 
                            github="https://github.com/Camleaf"
                            linkedin="https://www.linkedin.com/in/alexander-edwards-1a6879342/"
                            instagram="https://instagram.com/_alexcedw"
                            email="mailto:bdaace09@gmail.com"
                        />
                        <h1 className="w-full text-left">Alexander Edwards</h1>
                        <h2 className="w-full text-left">aka&ensp;
                            <a href="https://github.com/camleaf" target="_blank">
                                <InlineDecorator gap={0.75} inText={true}>Camleaf</InlineDecorator>
                            </a>
                        </h2>
                        <br/>
                        <p className="w-64 text-left">A highschool student passionate about Robotics & STEM.</p>
                        <br/>
                        <div className="flex flex-row gap-4">
                            <p className="text-3xl ">
                                <a href="./resume.pdf" target="_blank">
                                    <Decorator> Resume </Decorator>
                                </a>
                            </p>
                            <p className="text-3xl ">
                                <Link to="/portfolio">
                                    <Decorator> Portfolio </Decorator>
                                </Link>
                            </p>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
            </motion.div>
    )
}

export default Landing
