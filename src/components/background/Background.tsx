import { useEffect, useState } from 'react';
import "./Background.css";
import type { tileWrapper, tileDimensionData} from "./Background.tile";
import { getTileDimensions, makeBgTiles } from "./Background.tile";
import { definePath } from "./Background.snake";
import Tile from "./Tile";
//import Snake from "./Snake.tsx"

function Background() {
    const [bgTiles, setBgTiles] = useState<tileWrapper[]>([]);
    const [snakePaths, setSnakePaths] = useState<string[]>([]);
    // Initialize backgrund objects
    useEffect(()=>{
        // Initialize tiles
        const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
        const tempBgTiles = makeBgTiles(dimensionData);
        setBgTiles(tempBgTiles);
        definePath(tempBgTiles,{x:0,y:0},{x:20,y:20}); // Testing func

        window.addEventListener('resize',()=>{
            const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
            setBgTiles(makeBgTiles(dimensionData));
     
        });
        setSnakePaths([]);
        console.log(snakePaths)
        
    },[])


    return (
        <>
            <div className="bg-wrapper -z-99">
            
            </div>
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
