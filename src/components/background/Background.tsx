import { useEffect, useState } from 'react';
import "./Background.css";
import type { tileWrapper, tileDimensionData} from "./Background.scripts"
import { getTileDimensions, makeBgTiles } from "./Background.scripts"
import Tile from "./Tile";

function Background() {
    const [bgTiles, setBgTiles] = useState<tileWrapper[]>([]);

    // Initialize backgrund objects
    useEffect(()=>{
        // Initialize tiles
        const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
        setBgTiles(makeBgTiles(dimensionData));
        
        window.addEventListener('resize',()=>{
            const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
        setBgTiles(makeBgTiles(dimensionData));
     
        });
    },[])


    return (
        <>
            <div className="bg-wrapper">
                {bgTiles.map((data,index)=> (
                    <div key={index}>
                        <Tile 
                            colour={data.colour}
                            sidelength={data.sidelength}
                            x = {data.x}
                            y = {data.y}
                        />
                    </div>
                ))}          
            </div>
        </>
    );
}

export default Background;
