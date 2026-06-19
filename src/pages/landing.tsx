import Decorator from "../components/decoration/decorator"
import InlineDecorator from "../components/decoration/inlineDecorator"

function Landing() {
    return (
            <div className="w-full cont h-full flex flex-col lg:flex-row items-center">
                <div className="w-fit h-full lg:flex-1 items-end justify-items-end">
                    <div className="w-fit h-fit overflow-hidden rounded-xl">
                        <img id="" className="w-[40rem] mt-[-12rem]" src="/hero.png"/>
                    </div>    
                </div>
                <div className={"box-border w-fit h-full overflow-hidden lg:flex-1 flex flex-row items-start justify-start"}>
                    <div className="pt-8 pl-0 lg:pt-0 lg:pl-16 lg:w-auto flex flex-col items-start justify-center">
                        <h1 className="w-full text-center lg:text-left">Alexander Edwards</h1>
                        <h2 className="w-full text-center lg:text-left">aka&ensp;
                            <a href="https://github.com/camleaf" target="_blank">
                                <InlineDecorator gap={0.75} inText={true}>Camleaf</InlineDecorator>
                            </a>
                        </h2>
                        <br/>
                        <p className="w-64 text-center lg:text-left">A highschool student passionate about Robotics & STEM.</p>
                        <br/>
                        <div className="flex flex-row gap-4">
                            <p className="text-3xl ">
                                <a href="./resume.pdf" target="_blank">
                                    <Decorator> Resume </Decorator>
                                </a>
                            </p>
                            <p className="text-3xl ">
                                <a href="./portfolio">
                                    <Decorator> Portfolio </Decorator>
                                </a>
                            </p>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
    )
}

export default Landing
