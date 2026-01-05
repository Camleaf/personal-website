import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getTileDimensions } from "../background/Background.tile.ts";
import type { tileDimensionData } from "../background/Background.tile.ts";
import Tile from "../background/Tile.tsx";
import Refresh from "./Refresh.tsx";
import { switchPage, pages, type page } from "./Nav.switch.ts";
import "./Nav.css";
// Holds the navbar and page-switch animation handlers
function Nav() {
    const [dimensionData, setDimensionData] = useState<tileDimensionData>();
    const navigate = useNavigate(); // We need to define useNavitate inside the component file, but can pass it off to the .ts accessory once we define it
    const location = useLocation();

    const refreshRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setDimensionData(getTileDimensions(window.innerWidth,window.innerHeight));


        window.addEventListener('resize',()=>{
            setDimensionData(getTileDimensions(window.innerWidth, window.innerHeight));
        }); 
    },[])

    
    return (
        <>  
            <div className="refresh-wrapper" ref={refreshRef}> {(dimensionData)?<Refresh sidelength={dimensionData.intsidelength} refreshRef={refreshRef}/>:<></>} </div>
            <div className="navbar-wrapper">
                    {(dimensionData) ? pages.map((page:page, index:number)=>( // If dimensionData loaded then display the navbar
                        // Each navbar item has a colour and name attached. 
                        <div className="navbar-item" 
                            key={index} 
                            onClick={()=>{switchPage(page.name, navigate, location)}}
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
