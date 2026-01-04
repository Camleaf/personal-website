import { useState, useEffect } from "react";
import { getTileDimensions } from "../background/Background.tile.ts";
import type { tileDimensionData } from "../background/Background.tile.ts";
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
                       
            </div>
        </>
    );
}

export default Nav;
