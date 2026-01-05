import { useState, useEffect } from "react";
import { getTileDimensions } from "../background/Background.tile.ts";
import type { tileDimensionData } from "../background/Background.tile.ts";
import Tile from "../background/Tile.tsx";
import { pages, type page } from "./Nav.switch.ts";
import "./Nav.css";

function Nav() {

    const [dimensionData, setDimensionData] = useState<tileDimensionData>();
    
    useEffect(()=>{
        setDimensionData(getTileDimensions(window.innerWidth,window.innerHeight));


        window.addEventListener('resize',()=>{
            setDimensionData(getTileDimensions(window.innerWidth, window.innerHeight));
        });
        console.log(dimensionData);
    },[])

    return (
        <>
            <div className="navbar-head">
                    {(dimensionData) ? pages.map((page:page, index:number)=>( // If dimensionData loaded then display the navbar
                        // Each navbar item has a colour and name attached. 
                        <div className="navbar-item" 
                            key={index} 
                            style={{"--sidelength":dimensionData.sidelength} as React.CSSProperties}
                        >
                            
                            <Tile colour={page.colour} sidelength={dimensionData.sidelength} x={0} y={0} posMode={"default"}/> 
                            <h3>{page.name}</h3>
                        

                        </div>
                    )) :  // If dimensionData not loaded then return empty
                        <></>
                    }
            </div>
        </>
    );
}

export default Nav;
