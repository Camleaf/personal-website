
import { Link } from 'react-router-dom';
import Decorator from '../decoration/decorator';
import "./portfolio.css";
import { useState, useEffect } from 'react';
import data from '../../assets/portfolio-data.json'
import {motion} from "motion/react"
import InlineDecorator from "../decoration/inlineDecorator"


export type projectHeroProps = {
    name:string,
    description:string,
    links:{text:string,link:string,icon:string}[],
    tags:string[],
    heroImage:string,
}


function Timeline(){
    
    useEffect(() => {
        
        console.log(data);
      }, []);
    return (
        <>
            <motion.div>
            <div className="grid md:grid-cols-2 gap-8 w-[80vw] lg:w-[70rem]">
                {data.map((val:projectHeroProps,index)=>(
                    <div
                      key={index}
                      className={`rounded-2xl px-12 py-6 overflow-hidden shadow-sm shadow-cl-gray-3 relative`}
                    >
                        <div className="relative flex items-end justify-center overflow-hidden aspect-[16/9] shadow-md shadow-cl-gray-3">
                            <img 
                              src={"/portfolio/heros/" + val.heroImage} 
                              alt={val.name} 
                              className="w-full h-full object-cover transition-transform duration-700"
                            />
                        </div>
            
                        {/*text*/}
                        <div className="pt-4">
                            <div className="flex items-start justify-between">
                                <h3 className="font-[700]">
                                    {val.name}
                                </h3>
                            </div>
                            <p className=" font-[400]">{val.description}</p>
                        </div>

                        {/*tags*/}
                        <div className="flex flex-row gap-4 mt-4 flex-wrap">
                            {val.tags.map((tag:string,index)=>(
                                <div className="rounded-md bg-cl-gray-2 p-1 px-2">
                                    <p className="text-cl-gray-5">{tag}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16"/>
                        {/*links*/}
                        <div className="flex flex-row items-end gap-4 mt-auto absolute bottom-6">
                            {val.links.map(({text,link,icon},index)=>(
                                <a href={link} target="_blank"> 
                                    <Decorator gap={0.5} inText={true} clickable>
                                    <div className="group relative w-fit h-fit flex flex-row justify-center items-center gap-2">
                                        <img 
                                            src={"/icons/"+icon}
                                            className="w-4 h-4 inline-block group-hover:invert-[70%] "
                                        />
                                        {text}
                                    </div>
                                    </Decorator>
                                </a>
                            ))}

                        </div>
                    </div> 
                ))}
            </div>
            </motion.div>
        </>

    );

}



export default Timeline; 
