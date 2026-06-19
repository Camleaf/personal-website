
import { Link } from 'react-router-dom';
import ProjectHero from './projectHero';
import Decorator from '../decoration/decorator';
import "./portfolio.css";



function Timeline(){


    return (
       <>
            <div className="flex items-center flex-col gap-8 my-[4rem]">
                <div className="w-full text-center grid grid-cols-[1fr_4rem]">
                    <h1>
                        My Portfolio
                    </h1>
                    
                    <h2 className=" text-3xl fadein">
                        <Link to="/">
                            <Decorator> Home </Decorator>
                        </Link>
                    </h2>
                
                </div>
                
                <ProjectHero 
                    name="Mechmania" 
                    timeframe = "jun. 2025 - current"
                    description = "An annual robotics competition hosting over 150 students from schools across Waterloo Region."
                    yOffset={-2}    
                />
                <ProjectHero 
                    name="2702 team member" 
                    timeframe="sept. 2025 - current"
                    description="Part of design team for the turret, and on programming team. Top 0.2% in the world by EPA."
                />
                <ProjectHero
                    name="Learn"
                    timeframe="aug. 2025"
                    description="A knowledgebase of free robotics lessons and guides"
                    imageEnd="png"
                />
            </div>
       </>

    );

}



export default Timeline; 
