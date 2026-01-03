import { useEffect, useState } from 'react';
import "./Background.css";
import type { tileWrapper, tileDimensionData} from "./Background.tile";
import { getTileDimensions, makeBgTiles } from "./Background.tile";
import { buildSnakePaths } from "./Background.snake";
import Tile from "./Tile";
import Snake from "./Snake.tsx"

function Background() {
    const [bgTiles, setBgTiles] = useState<tileWrapper[]>([]);
    const [snakePaths, setSnakePaths] = useState<string[]>();
    const [dimensionData, setDimensionData] = useState<tileDimensionData>();
    // Initialize backgrund objects
    useEffect(()=>{
        // Initialize tiles
        const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
        setDimensionData(dimensionData);
        
        const tempBgTiles = makeBgTiles(dimensionData);
        setBgTiles(tempBgTiles);
        
        
        window.addEventListener('resize',()=>{
            const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
            const tempBgTiles = makeBgTiles(dimensionData);

            setBgTiles(tempBgTiles);
            setDimensionData(dimensionData);

            setSnakePaths(buildSnakePaths(tempBgTiles,dimensionData));
        });
        //Testing func
        setSnakePaths(buildSnakePaths(tempBgTiles,dimensionData));
            
    },[])


    return (
        <>
            <div className="bg-wrapper -z-99">
                {(snakePaths && dimensionData) ?
                    snakePaths.map((snake,index)=>(
                        <div key={index} className="snake-wrapper">
                            <Snake maxFitX={dimensionData.maxFitX} maxFitY={dimensionData.maxFitY} path={snake} />
                        </div>
                    ))
                  :
                <></>
                }
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
