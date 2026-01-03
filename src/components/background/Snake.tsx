import { useEffect, useState } from 'react';
import "./Background.css"
import { colours } from "./Background.tile";


// The scattered tiles across the background which are filled
function Snake(props:{path:string, maxFitX:number, maxFitY:number}) {
    // I need to create the paths in the base background and then dynamically send them in here
  // gotta build that dynamically generated snake
   // Some starting ideas are precalculating an svg path and getting a line to follow i
    // have the snakes just straight-up take the path and configure style options from there 

    
    // To make a lot of this code clearer, props.path.split(" ").length is equal to the length of the path of the snake
    const [style, setStyle] = useState<React.CSSProperties>();
    
    useEffect(()=>{
        if (!props.path) return;
        const pathLength = props.path.split(" ").length;
        setStyle({
            "--highlight":pathLength/5, // I want to have it be a fifth of the length
            "--gap":pathLength,
            "--dashoffset": // Equal to highlight + gap. Sign determines direction
                (pathLength +  // gap
                pathLength/5) // highlight
                * ((Math.random()>0.5) ? -1: 1), // pickRandom between right and left (positive and negative)
            "--colour":colours[Math.floor(Math.random()*colours.length)], // pick random from colours
            "--duration":(pathLength/7) + "s",
            "--delay":-((pathLength/7)/Math.floor(Math.random()*7)) + "s"
        } as React.CSSProperties);
    },[])

    useEffect(()=>{
        if (!props.path) return;
        const pathLength = props.path.split(" ").length;
        setStyle({
            "--highlight":pathLength/5, // I want to have it be a fifth of the length
            "--gap":pathLength,
            "--dashoffset": // Equal to highlight + gap. Sign determines direction
                (pathLength +  // gap
                pathLength/5) // highlight
                * ((Math.random()>0.5) ? -1: 1), // pickRandom between right and left (positive and negative)
            "--colour":colours[Math.floor(Math.random()*colours.length)], // pick random from colours
            "--duration":(pathLength/7) + "s",
            "--delay":-((pathLength/7)/Math.floor(Math.random()*7)) + "s"

        } as React.CSSProperties);

    },[props.path])
        
    return (
        (style)?
        <>
            <svg width={window.innerWidth + 'px'} id={props.path}
                viewBox={`0 0 ${props.maxFitX} ${props.maxFitY}`} key={props.path}>

              {/* Moving highlight */}
              <path
                key={props.path}
                d={props.path}
                fill="none" 
                // Stroke colour is defined in css
                strokeWidth="1"
                className="snake-highlight"
                style={style}
              />
            </svg>
        </>
        : <></>
    );
}

export default Snake;
