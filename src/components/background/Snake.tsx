import { useEffect } from "react";
import "./Background.css"
import { definePath } from "./Background.snake";
import type { tileWrapper } from "./Background.tile";
// The scattered tiles across the background which are filled
function Snake(props:{filled:tileWrapper[]}) {
    // I need to create the paths in the base background and then dynamically send them in here
  // gotta build that dynamically generated snake
   // Some starting ideas are precalculating an svg path and getting a line to follow i
    useEffect(()=>{
        definePath(props.filled,{x:0,y:0},{x:20,y:20})
    },[props]) 

    return (
        <>
            <svg viewBox="0 0 500 200" width="500">

              {/* Moving highlight */}
              <path
                d="M0 100 Q250 10 480 100"
                fill="none"
                stroke="orange"
                strokeWidth="6"
                className="snake-highlight"
              />
            </svg>
        </>
    );
}

export default Snake;
