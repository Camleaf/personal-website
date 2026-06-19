import { useNavigate } from "react-router-dom"
import Decorator from "./decoration/decorator"
import InlineDecorator from "./decoration/inlineDecorator"

function Landing() {
    return (
            <div className="w-full cont h-full flex flex-col lg:flex-row items-center justify-center">
                <div className="w-[40rem] h-[40rem] rounded-xl overflow-hidden items-center justify-center">    
                    <img id="" className="w-[40rem] mt-[-12rem]" src="/hero.png"/>
                </div>
                <div className={"box-border w-fit h-full overflow-hidden flex flex-row items-start justify-start"}>
                    <div className="pt-8 pl-0 lg:pt-0 lg:pl-16 lg:w-auto flex flex-col items-start justify-center">
                        <h1 className="w-full text-center lg:text-left">Alexander Edwards</h1>
                        <h2 className="w-full text-center lg:text-left">aka&ensp;
                            <a href="https://github.com/camleaf">
                                <InlineDecorator gap={0.75} inText={true}>Camleaf</InlineDecorator>
                            </a>
                        </h2>
                        <br/>
                        <p className="w-64 text-center lg:text-left">A highschool student passionate about Robotics & STEM.</p>
                        <br/>
                        <p className="text-3xl ">
                            <a href="./resume.pdf">
                                <Decorator> Resume </Decorator>
                            </a>
                        </p>
                        <br/>
                    </div>
                </div>
                 <div className={`${(window.innerWidth < 1024) ? 'w-[120vw]' : ''}`}></div>
            </div>
    )
}

export default Landing
