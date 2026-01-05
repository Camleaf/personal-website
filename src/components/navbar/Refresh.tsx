import { useEffect, useState, type RefObject } from "react";
import { generateMaxFit, type dimensionObject, generateBackgroundPathData, type pathData, generateMaskingPathData } from "./Nav.refresh.ts";
// The function which creates and manages the svg animations
function Refresh(props:{sidelength:number, refreshRef:RefObject<HTMLDivElement|null>}){
    
    const [maxFit, setMaxFit] = useState<dimensionObject>();
    const [pathData, setPathData] = useState<pathData[]>();
    const [maskPath, setMaskPath] = useState<string>();

    useEffect(()=>{
        // Todo: use the maxfit and sidelength data to create an svg for the animation. For the background mask, make an svg with multiple paths, but each time i need to make a new pixel of same colour just teleport the path instead of making new path. 
        if (props.refreshRef.current){
            const dimensionData:dimensionObject = generateMaxFit(props.refreshRef.current.clientWidth, props.refreshRef.current.clientHeight, props.sidelength);
            setMaxFit(dimensionData);
            setPathData(generateBackgroundPathData(dimensionData));
            setMaskPath(generateMaskingPathData(dimensionData));
        };
        
        
        
        window.addEventListener('resize',()=>{ // Always gotta rebuild stuff on resize
            if (props.refreshRef.current){
                const dimensionData:dimensionObject =generateMaxFit(props.refreshRef.current.clientWidth, props.refreshRef.current.clientHeight, props.sidelength);
                setMaxFit(dimensionData);
                setPathData(generateBackgroundPathData(dimensionData));
                setMaskPath(generateMaskingPathData(dimensionData));
            };

        }); 
    },[]);

    return (
        <>
            {(pathData && maxFit && maskPath && props.refreshRef.current) ? 
               <svg width={props.refreshRef.current.clientWidth + 'px'}
                viewBox={`0 0 ${maxFit.maxFitX} ${maxFit.maxFitY}`}>
                    {/* Svg mask for bg*/} 
                    <defs>
                        <mask id="refresh-mask" maskUnits="userSpaceOnUse">
                            <path
                                d={maskPath}
                                fill="none"
                                id="refresh-mask-path"
                                stroke="white"
                                strokeWidth="1"
                                className="refresh-mask"
                                style={{
                                    "--length":maskPath.split(' ').length
                                } as React.CSSProperties}
                            /> 
                        </mask>
                     </defs>
                     {/* Static bg */}
                     <g mask="url(#refresh-mask)">
                        {pathData.map((pathInfo:pathData,index)=>(
                            <path   
                                key={index}
                                d={pathInfo.path}
                                stroke={pathInfo.colour}
                                fill="none"
                                strokeWidth={"1"}
                                className="refresh-background"
                            />
                        ))}
                    </g>
                </svg> 

                :
                <></>
            }  
        </>
    )
}


export default Refresh;
