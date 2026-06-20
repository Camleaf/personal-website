
import { Link } from 'react-router-dom';
import ProjectHero from './projectHero';
import Decorator from '../decoration/decorator';
import "./portfolio.css";
import { useState, useEffect } from 'react';
import type { projectHeroProps } from './projectHero';

type jsonData = projectHeroProps[];


function Timeline(){
    
    const [data, setData] = useState<jsonData>([]);
    useEffect(() => {
        
        fetch('/portfolio/data.json') // Adjust the path if your file is in a subfolder
          .then(response => {
            if (!response.ok) {
              throw new Error('file no exist');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('err on fetch:', error));
      }, []);
    return (
       <>
       
            <div className="flex items-center flex-col gap-8 my-[4rem]">
                <div className="w-full text-center sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-[1fr_4rem]">
                    <h1 className="titleSlide sm:order-2 md:order-1">
                        My Portfolio
                    </h1>
                    
                    <h2 className=" text-3xl fadein sm-order-2 md:order-2">
                        <Link to="/">
                            <Decorator> Home </Decorator>
                        </Link>
                    </h2>
                
                </div>
                
                {data.map((project:projectHeroProps,index:number)=>(
                    <ProjectHero 
                        name={project.name}
                        timeframe={project.timeframe}
                        description={project.description}
                        yOffset={project.yOffset}
                        xOffset={project.xOffset}
                        extLink={project.extLink}
                        imageEnd={project.imageEnd}
                        github={project.github}
                        
                    />
                    
                ))}

            </div>
       
       </>

    );

}



export default Timeline; 
