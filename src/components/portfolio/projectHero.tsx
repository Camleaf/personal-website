

import Socials from "../socials";
import Decorator from "../decoration/decorator";
import InlineDecorator from "../decoration/inlineDecorator";
import '../loader/loader.css'

interface propTypes{
    name:string,
    xOffset?:number, // converts to rem
    yOffset?:number,
    height?:number,
    width?:number,
    github?:string,
    description?:string,
    onClick?:(name:string)=>void
}


function ProjectHero({name, github="",description="Some important sample text",onClick=(name:string)=>{}}:propTypes){


    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className="relative z-10 w-fit h-full lg:w-1/2 items-end justify-items-end hero-load">
                <Decorator>
                    <div className="w-[30rem] h-[20rem] overflow-hidden rounded-xl">
                        <img className="w-[40rem] max-w-none pr-[2rem]" src={`/portfolio/heros/${name}.jpg`}/>
                    </div>    
                </Decorator>
            </div>
            <div className={"relative z-0 box-border w-fit h-full overflow-hidden lg:w-1/2 flex flex-row items-start justify-start"}>
                <div className="pt-8 pl-0 lg:pt-0 lg:pl-8 lg:w-auto flex flex-col items-start justify-center hero-text-load">
                    <Socials 
                        github={github}
                    />
                    <h1 className="w-full text-center lg:text-left">{name}</h1>
                    <br/>
                    <p className="w-64 text-center lg:text-left">{description}</p>
                    <br/>
                </div>
            </div>
        </div>

    );

}



export default ProjectHero
