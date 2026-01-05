import { useEffect, useState, type RefObject } from "react";
import { generateMaxFit, type dimensionObject } from "./Nav.refresh.ts";
// The function which creates and manages the svg animations
function Refresh(props:{sidelength:number, refreshRef:RefObject<HTMLDivElement|null>}){
    
    const [maxFit, setMaxFit] = useState<dimensionObject>();

    useEffect(()=>{
        
        if (props.refreshRef.current){setMaxFit(
             generateMaxFit(props.refreshRef.current.clientWidth, props.refreshRef.current.clientHeight, props.sidelength)
        )};
        
        
        
        window.addEventListener('resize',()=>{ // Always gotta rebuild stuff on resize
            if (props.refreshRef.current){setMaxFit(
                generateMaxFit(props.refreshRef.current.clientWidth, props.refreshRef.current.clientHeight, props.sidelength)
            )};

        }); 


        
        
    },[]);

    useEffect(()=>{console.log(maxFit)},[maxFit])

    return (
        <>
            
        </>
    )
}


export default Refresh;
